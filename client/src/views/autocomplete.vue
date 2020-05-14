<template>
    <section>
        <p class="content"><b>GymEquippment:</b> {{ selected }}</p>
        <b-field label="Find the Eqippment">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. jQuery"
                icon="magnify"
                clearable
                @select="option => GymEquippment = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                data: [
                    'ChestPress',
                    'Dumbells',
                    'Barbellrods',
                    'Threadmill',
                    'Crosstrainers',
                    'legpress',
                    'Benchpress',
                    'Squatts',
                    'Jumpingjacks',
                    'plankexercises',
                    'Tricepplan',
                    'Bicepsplan'
                ],
                name: '',
                GymEquippment: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>