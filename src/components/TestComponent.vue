<template>
    <v-container>
        <v-toolbar
                dark
                color="teal"
        >
            <v-toolbar-title>State selection</v-toolbar-title>
            <v-autocomplete
                    v-model="select"
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    cache-items
                    class="mx-4"
                    flat
                    hide-no-data
                    hide-details
                    label="Search"
                    solo-inverted
            ></v-autocomplete>
            <!--        <v-btn icon>-->
            <!--            <v-icon>mdi-dots-vertical</v-icon>-->
            <!--        </v-btn>-->
        </v-toolbar>
        <div>
            <v-form>
                <v-container>
                    <v-row>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Regular"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Regular"
                                    placeholder="Placeholder"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Solo"
                                    solo
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Solo"
                                    placeholder="Placeholder"
                                    solo
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Filled"
                                    filled
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Filled"
                                    placeholder="Placeholder"
                                    filled
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Outlined"
                                    outlined
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    label="Outlined"
                                    placeholder="Placeholder"
                                    outlined
                            ></v-text-field>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                    label="Search"
                                    outlined
                                    append-icon="mdi-magnify"
                            >

                            </v-text-field>

                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </div>
        <div style="background-color: gainsboro">
            <v-row style="background-color: gainsboro">
                <v-col style="background-color: lightgray">
                    <v-card
                            class="mx-auto"
                            color="#FFFFFF"
                            white
                            max-width="400"
                    >
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <v-icon
                                    large
                                    left
                            >
                                mdi-twitter
                            </v-icon>
                        </v-card-title>

                    </v-card>
                </v-col>
            </v-row>
        </div>

        <div style="background-color: #DCF8FF">

            <p>{{ count }}</p>
            <p>
                <button @click="increment">
                    <v-icon>mdi-plus-thick</v-icon>
                </button>
                <button @click="decrement">
                  <v-icon>
                      mdi-minus-circle-outline
                  </v-icon>
                </button>
            </p>

        </div>
    </v-container>

</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                items: [],
                search: null,
                select: null,
                states: [
                    'Alabama',
                    'Alaska',
                    'American Samoa',
                    'Arizona',
                    'Arkansas',
                    'California',
                    'Colorado',
                    'Connecticut',
                    'Delaware',
                    'District of Columbia',
                    'Federated States of Micronesia',
                    'Florida',
                    'Georgia',
                    'Guam',
                    'Hawaii',
                    'Idaho',
                    'Illinois',
                    'Indiana',
                    'Iowa',
                    'Kansas',
                    'Kentucky',
                    'Louisiana',
                    'Maine',
                    'Marshall Islands',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                    'Nebraska',
                    'Nevada',
                    'New Hampshire',
                    'New Jersey',
                    'New Mexico',
                    'New York',
                    'North Carolina',
                    'North Dakota',
                    'Northern Mariana Islands',
                    'Ohio',
                    'Oklahoma',
                    'Oregon',
                    'Palau',
                    'Pennsylvania',
                    'Puerto Rico',
                    'Rhode Island',
                    'South Carolina',
                    'South Dakota',
                    'Tennessee',
                    'Texas',
                    'Utah',
                    'Vermont',
                    'Virgin Island',
                    'Virginia',
                    'Washington',
                    'West Virginia',
                    'Wisconsin',
                    'Wyoming',
                ],
            }
        },
        watch: {
            search (val) {

                val && val !== this.select && this.querySelections(val)
            },
        },
        computed:{
            count () {

                return this.$store.state.count
            }
        },
        methods: {
            increment () {
                console.log("you clicked increment");
                // this.$store.state.count++;
                this.$store.commit('increment')
            },
            decrement () {
                console.log("you clicked decrement");
                this.$store.commit('decrement')
                // this.$store.state.count--;
            },
            querySelections (v) {

                this.loading = true
                setTimeout(() => {
                    this.items = this.states.filter(e => {
                        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                    this.loading = false
                }, 500)
            },
        },
    }
</script>
