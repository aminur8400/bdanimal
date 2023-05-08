<template>
    <div class="container">
        <h2 class="title">Bidder Information</h2>
        <div class="row">
            <table>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Create Time</th>
                <th>payment</th>
            </tr>
            <tr v-for="q in bird" :key="q.id">
                <td>{{q.id}}</td>
                <td><i class="fa fa-microchip"></i>{{q.chip_no}}</td>
                <td>{{q.bird_color}}</td>
                <td>{{ q.module_type }}</td>
                <td>
                    <button class="btn-custom"><i class="fa fa-check-square-o"></i></button>
                    <button class="btn-custom"><i class="fa fa-close"></i></button>
                </td>
            </tr>
            </table>
        </div>
    </div>
</template>
<script setup>
    import birds from "../pigeon-data.json"
    const bird = birds;
</script>
<style scoped>
tr:not(:first-child):not(:last-child) {
    border-bottom: 1px solid;
}
.btn-custom {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  margin: 1px;
}

/* Darker background on mouse-over */
.btn-custom:hover {
  background-color: RoyalBlue;
}
i.fa.fa-microchip{
    padding: 0px 10px;
}
#home{
    min-height: 50vh;
}
</style>