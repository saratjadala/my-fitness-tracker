<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header text-white bg-dark">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/MyExercises">Exercises</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/AddExercises">schedule</router-link>
          </li>
        </ul>
        </div>
        <div class="container">
            <form @submit.prevent="submit">
              <br>

              <div class="form-group row">
                <label for="name" class="col-3 col-form-label">Name</label>
                <div class="col-9">
                <input type="text" v-model="data.name"
                    class="form-control"
                    name="name"
                    id="name"
                    aria-describedby="helpname"
                    placeholder="Exercise Name"
                    required>
                  <small id="helpname" class="form-text text-muted">Add the name of the Exercise</small>
                </div>
                </div>

            <div class="form-group row">
          <label for="upper_body" class="col-3 col-form-label">upperbody</label>
          <div class="col-9">
          <input type="text" v-model="data.upper_body"
                    class="form-control"
                    name="upper_body"
                    id="body_focus"
                    aria-describedby="helpupper_body"
                    placeholder="upper_body"
                    required>
                  <small id="helpupper_body" class="form-text text-muted">Add the body focus.</small>
          </div>
          </div>
            
        
          
          <div class="form-group row">
          <label for="reps" class="col-3 col-form-label">pushups</label>
          <div class="col-9">
          <input type="text" v-model="data.lowerbody"
                    class="form-control"
                    name="reps"
                    id="reps"
                    aria-describedby="helplowerbody"
                    placeholder="lowerbody"
                    required>
                  <small id="helplowerbody" class="form-text text-muted">Add the number of pushups.</small>
          </div>
          </div>

          <div class="form-group row">
          <label for="sets" class="col-3 col-form-label">pullups</label>
          <div class="col-9">
          <input type="text" v-model="data.pullups"
                    class="form-control"
                    name="running"
                    id="running"
                    aria-describedby="running"
                    placeholder="running"
                    required>
                  <small id="running" class="form-text text-muted">Add the number of pullups.</small>
          </div>

          </div>
          <div class="form-group row">
          <label for="sets" class="col-3 col-form-label">walkingdistance</label>
          <div class="col-9">
          <input type="text" v-model="data.walkingdistance"
                    class="form-control"
                    name="walkingdistance"
                    id="walkingdistance"
                    aria-describedby="helpwalkingdistance"
                    placeholder="walkingdistance"
                    required>
                  <small id="helpwalkingdistance" class="form-text text-muted">Add the number of km you walked.</small>
          </div>
          </div>
          

          <br>

         <div class="form-group row">
          <div class="offset-3 col-9">
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          </div>
          </form>
          </div>
          </div>
          </div>
          </div>
          

</template>

<script>
import { Globals } from '@/models/api';
import { addExercise } from '@/models/Exercises';
import toastr from 'toastr';
export default {
  data: () => ({
    data: {},
    newExercise: null,
  }),
  methods: {
    async submit() {
      try {
        const m = await addExercise(this.data);
        this.newExercise = m;
        toastr.success("You've Successfully added the Exercise!");
      } catch (error) {
        Globals.errors.push(error);
        toastr.error(error.message);
      }
    },
  },
};
</script>

<style>
</style>
