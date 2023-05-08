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
                <th>Enable/Disable</th>
            </tr>
            <tr v-for="bid in bidder" :key="bid.id">
                <td>{{bid.id}}</td>
                <td><i class="fa fa-envelope-o"></i>{{bid.email}}</td>
                <td>{{bid.phone}}</td>
                <td>{{ bid.create_time }}</td>
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
import bidder_list from "../bidders-list.json"
const bidder = bidder_list;

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
i.fa.fa-envelope-o {
    padding: 0px 10px;
}
</style>