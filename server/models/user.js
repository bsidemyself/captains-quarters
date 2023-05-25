const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const characterSchema = require('./Character');

const userSchema = new Schema(
{
username: {
    type:String,
    required: true,
    unique: true,
},
email: {
    type:String,
    require: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
},
password: {
    type:String,
    required: true,
},

character: [characterSchema],
},

{
    toJSON: {
        virtuals: true,
    },
}

);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const rounds = 10;
        this.password = await bcrypt.hash(this.password, rounds);
    }
next();

});

userSchema.methods.isCorrectPassword = async function ( password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('characterCount').get(function () {
    return this.savedCharacters.length;
});

const User = model('User', userSchema);

module.exports = User;