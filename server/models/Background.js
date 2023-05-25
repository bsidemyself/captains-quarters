const backgroundChoice = {

    biomorph: {
        statMods: { 
            health: 1, 
            chooseTwo: ["Move", "Fight", "Shoot"] 
        },
        
        corePowers: [
            "Adrenaline Surge",
            "Armor Plates",
            "Camouflage",
            "Fling",
            "Regenerate",
            "Restructure Body",
            "Toxic Claws",
            "Toxic Secretions",
        ],
    },
    
    cyborg: {
        statMods: { 
            health: 1,
            chooseTwo: ["Move", "Fight", "Shoot"] 
        },

        corePowers: [
            "Camouflage",
            "Control Robot",
            "Data Knock",
            "Energy Shield",
            "Power Spike",
            "Quick Step",
            "Target Lock",
            "Temporary Upgrade",
        ],
    },

    mystic: {
        statMods: {
            will: 2,
            health: 1,
            chooseOne: ["Move", "Fight", "Shoot"],
        },

        corePowers: [
            "Control Animal",
            "Dark Energy",
            "Heal",
            "Life Leach",
            "Mystic Trance",
            "Puppet Master",
            "Suggestion",
            "Void Blade",
        ],
    },

    roboticsExpert: {
        statMods: {
             will: 1,
            chooseTwo: ["Move", "Fight", "Shoot", "Health"],
        },

        corePowers: [
            "Control Robot",
            "Create Robot",
            "Drone",
            "Electromagnetic Pulse",
            "Remote Firing",
            "Remote Guidance",
            "Repair Robot",
            "Re-wire Robot",
        ],
    },

    rogue: {
        statMods: {
            will: 1,
            health: 1,
            chooseTwo: ["Move", "Fight", "Shoot"],
        },

        corePowers: [
            "Bait and Switch",
            "Bribe",
            "Cancel Power",
            "Concealed Firearm",
            "Data Jump",
            "Fortune",
            "Haggle",
            "Quick-Step",
        ],
    },

    psionicist: {
        statMods: {
            will: 2,
            health: 1,
            chooseOne: ["Move", "Fight", "Shoot"],
        },

        corePowers: [
            "Break Lock",
            "Destroy Weapon",
            "Lift",
            "Psionic Fire",
            "Psychic Shield",
            "Pull",
            "Suggestion",
            "Wall of Force",
        ],
    },

    tekker: {
        statMods: {
            will: 2,
            chooseTwo: ["Move", "Fight", "Shoot", "Health"]
        },

        corePowers: [
            "Anti-gravity Projection", 
            "Data Jump", 
            "Data Knock", 
            "Data Skip", 
            "Drone", 
            "Electromagnetic Pulse", 
            "Holographic Wall", 
            "Transport",
        ],
    },

    veteran: {
        statMods: {
            fight: 1,
            health: 1,
            chooseOne: ["+1 Move", "+1 Fight", "+1 Shoot"]
        },

        corePowers: [
            "Armoury",
            "Command",
            "Coordinated Fire",
            "Energy Shield",
            "Fortune",
            "Power Spike",
            "Remote Firing",
            "Target Designation",
        ],
    },
};

