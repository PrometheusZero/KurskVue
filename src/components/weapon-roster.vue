<template>
  <div>
    <span>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
            <th>Str</th>
            <th>Die1</th>
            <th>Die2</th>
            <th>Range</th>
            <th>Acc &#37;</th>
            <th>Acc / in</th>
            <th>Cost</th>
            <th>Weight</th>
            <th>Owned</th>
            <th>More...</th>
          </tr>
          <tr v-for="obj in gang.weapons">
            <td>{{ obj.name }}</td>
            <td>{{ obj.size }}</td>
            <td>{{ obj.type }}</td>
            <td>{{ obj.stren }}</td>
            <td>{{ obj.die1 }}</td>
            <td>{{ obj.die2 }}</td>
            <td>{{ obj.range }}</td>
            <td>{{ obj.accX }}</td>
            <td>{{ obj.accY }}</td>
            <td>{{ obj.totalCost }}</td>
            <td>{{ obj.totalWeight }}</td>
            <!-- PROGRESS SO FAR -->
          </tr>
        </thead>
      </table>
    </span>  
  </div>
</template>

<script>

export default {
  props: ['gang'],
  data: function() {
    return {

    }
  },
  methods: {

  },
  computed: {
    
  }
}
</script>

<style lang="scss">

</style>