export default {
    methods: {
        turn2Real(value) {
            switch (value) {
                case 'fan':
                    return 'All Fans'
                case 'mosquitoKiller':
                    return 'Mosquito Killers'
                case 'iron':
                    return 'Irons'
                case 'insect_repellent':
                    return 'Insect Repellents'
                case 'vacuum':
                    return 'Vaccum Cleaners'
                case 'fridge':
                    return 'Fridge'
                case 'jug':
                    return 'Electric Jug/Kettles'
                case 'cooker':
                    return 'Cooker'
                case 'steamboat':
                    return 'Steam Boat'
                case 'blender':
                    return 'Blender'
                case 'chopper':
                    return 'Chopper'
                case 'ovan':
                    return 'Ovan'
                case 'toaster':
                    return 'Toaster'
                case 'fryer':
                    return 'Fryer'
                case 'airpot':
                    return 'Airpot'
            }
        }
    }
}