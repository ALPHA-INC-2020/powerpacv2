export default {
    data() {
        return {
            selectedSortOption: 'Feature',
            options: ['Feature', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low-high', 'Price, high-low']
        }
    },
    methods: {
        changeSortValue(value) {
            console.log(value)
            switch (value) {
                case 'Feature':
                    this.settoInitial(this.$store.getters["productStore/getProducts"](
                        this.$route.params.dataName
                    ))
                    break
                case 'Price, low-high':
                    this.sortByPrice(value)
                    break
                case 'Price, high-low':
                    this.sortByPrice(value)
                    break
                case 'Alphabetically, A-Z':
                    this.sortByAlphabet(value)
                    break
                case 'Alphabetically, Z-A':
                    this.sortByAlphabet(value)
                    break
            }
        },

        sortByPrice(sortOrder) {
            this.products = this.products.sort((a, b) => (sortOrder === 'Price, low-high' ? parseInt(a.promoPrice) - parseInt(b.promoPrice) : parseInt(b.promoPrice) - parseInt(a.promoPrice)))
        },
        sortByAlphabet(sortOrder) {
            if (sortOrder === 'Alphabetically, A-Z') {
                this.products = this.products.sort(this.dynamicSort('productName'))
            } else {
                this.products = this.products.reverse(this.dynamicSort('productName'))
            }
        },
        dynamicSort(property) {
            let sortOrder = 1

            if (property[0] === '-') {
                sortOrder = -1
                property = property.substr(1)
            }

            return function(a, b) {
                if (sortOrder === -1) {
                    return b[property].localeCompare(a[property])
                } else {
                    return a[property].localeCompare(b[property])
                }
            }
        }
    }
}