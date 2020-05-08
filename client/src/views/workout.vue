<template>
    <section>
    <h1 class="title is-1">Training video</h1>
        <div class="container">
            <figure class ="image is-16by9">
                <iframe class="has-ratio" width="640" weight="360" src="https://www.youtube.com/watch?v=oAPCPjnU1wA" frame border="0" allowfullscreen></iframe>
            </figure>
        </div>
        <div class="container">
            
            <i class="fas fa-tint"></i><p> Keep moving</p> 
        </div>
    <container>
        <h1 class="title"> Our Recommended Exercises</h1>
            <h2 class="subtitle">Here are a few recommendations that we have in addition to our video</h2>
            <div class="container" v-for="x in exercises" :key="x.exercise">
                    <h1>{{x.exercise}}
                        <a class="delete" @click="deleteExercise(i)" v-if="isAdmin"></a>
                    </h1>    
            </div>    
            <div class="media-content">
                <input class="input" type="text" placeholder="New Exercise" v-model="newExercise" v-if="isAdmin">
                    <input class="button" type="submit" value="Add another item" @click="addExercise()"></div>        
    </container>
    </section> 
</template>   

<script>
import Exercisew from "../models/Exercises";

export default{
  data:()=>({
    newExercise: "",
    exercises: Exercises.State.Exercises,
    isAdmin: "true"
  }),
  methods: {
    async addExercise(){
        try {
            await Exercises.addExercise(this.newExercise)
        } catch (error) {
            this.error = error;
        }
    },
    async deleteExercise(i){
        try {
            await Exercises.removeExercise(i)
        } catch (error) {
            this.error = error
        }
        }
    },
    created(){
        Exercises.Init()
    }
  }
</script>