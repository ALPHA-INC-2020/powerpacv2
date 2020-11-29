export default {
    data() {
        return {
            routeName: this.$route.params.dataName,
            totalPages: this.$route.params.dataName.length / 24 * 10
        }
    },
    methods: {
        // fetch brand types from releated array
        getFilterItemfromMainData(mainData) {
            let duplicateItems = ['all']

            mainData.forEach((element) => {
                duplicateItems.push(element.brand)
            })
            this.filterItemBrand = this.getUnique(duplicateItems)
                // eslint-disable-next-line no-const-assign
            duplicateItems = ['all']
            mainData.forEach((element) => {
                duplicateItems.push(element.productType)
            })
            this.filterItemProductType = this.getUnique(duplicateItems)
        },
        // removing duplicate items from array
        getUnique(array) {

            const uniqueArray = []
            for (const value of array) {
                if (!uniqueArray.includes(value)) {
                    uniqueArray.push(value)
                }
            }
            return uniqueArray
        },
        // set releated value on page loaded (messy code) refactor later
        setInitialValue() {
            const length = this[this.routeName].length
            if (length <= 24) {
                this.totalPages = 10
                this.stopId = length
            } else if (length <= 48) {
                this.totalPages = 20
                this.stopId = 24
            } else if (length <= 72) {
                this.totalPages = 30
                this.stopId = 24
            } else {
                this.totalPages = 40
                this.stopId = 24
            }
            this.display = this[this.routeName].filter(element => element.id <= (this.current * 24) && element.id > (this.current * 24) - 24)
            this.startId = 1
        },
        // set filtered data by brand
        setFilteredData(checkBrand, filterType) {
            this.products = this.$store.getters["productStore/getProducts"](
                this.$route.params.dataName
            ).filter(element => element[filterType] == checkBrand)

            // this.products = this.products.filter(element => element[filterType] === checkBrand)
            // this.totalPages = 10
            // this.startId = this.display.length > 0 ? 1 : this.display.length
            // this.stopId = this.display.length
        },
        // change list view and grid view
        changeView(viewValue) {
            this.view = viewValue
        },
        settoInitial(data) {
            this.products = data
        }
    },
    created() {
        // set filtered value "all" on page loaded
        this.$nuxt.$on('filterData', (toFilterValue, filterType) => {
            var allProductfromStore = this.$store.getters["productStore/getProducts"](
                this.$route.params.dataName
            );
            toFilterValue && toFilterValue !== 'all' ? this.setFilteredData(toFilterValue, filterType) : this.settoInitial(allProductfromStore)
        })
    },
    watch: {
        // watching filter item with a-z,z-a,low-h,h-low etc..
        current(val) {
            this.current = val
            this.display = this[this.routeName].filter(element => element.id <= val * 24 && element.id > (val * 24) - 24)
            this.startId = this.display[0].id
            this.stopId = this.display[this.display.length - 1].id
        }
    }

}