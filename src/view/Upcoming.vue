<template>
    <div class="container">
        <h2 class="title">Upcoming</h2>
        <div class="row auction-card">
            <div v-for="q in bird" :key="q.id" class="col-4">
                <div class="card-outline">
                    <div class="row header-objects">
                    <h4>{{ q["chip-no"] }}</h4>
                    <RouterLink :to="`/auction/edit/${q.id}`" class="btn-custom"><i class="fa fa-edit"></i></RouterLink>
                </div>
                    <img src="../images/01-BAB-2020-141222-C-(RED-CHEQ).jpg">
                    <div class="separator-items"></div>
                    <h4>BAB-2020-141222 C</h4>
                    <div class="card-text">Bred By : <span>Shahalam Sikdar</span></div>
                    <div class="card-text">Last Bidder : <span>Rezaul</span></div>
                    <div class="card-text">Last Bid : <span>5000</span></div>
                    <div class="row btn-design">
                        <RouterLink :to="`/auction/bidding/${q.id}`" class="btn">Bid Now</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="title">Past</h2>
        <div class="row auction-card">
            <div v-for="q in bird" :key="q.id" class="col-4">
                <div class="card-outline">
                    <h4>BAB-2020-141222 C</h4>
                    <img src="../images/01-BAB-2020-141222-C-(RED-CHEQ).jpg">
                    <div class="separator-items"></div>
                    <h4>BAB-2020-141222 C</h4>
                    <div class="card-text">Bred By : <span>Shahalam Sikdar</span></div>
                    <div class="card-text">Last Bidder : <span>Rezaul</span></div>
                    <div class="card-text">Last Bid : <span>5000</span></div>
                    <div class="row btn-design">
                        <button class="btn">Winning Bid</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
  
<script setup>
    import {  RouterLink } from "vue-router"
    import birds from "./data/pigeon-data.json"
    import {ref} from "vue"
    const bird = ref(birds);
</script>
  
<style scoped>
.card-outline {
    border: 1px solid black;
    padding: 7px;
}
.auction-card {
    justify-content: flex-start;
}
.separator-items {
    height: 6px;
    width: 90%;
    background-color: #c7e2ea;
}
.card-text {
    font-weight: 700;
    padding: 5px 0px;
    margin: 7px 0px;
}
.btn-design button{
margin: 10px;
    padding: 10px 49px;
    /* background-color: #889a3f;
    color: white;
    border: none; */
}
.btn-custom {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 30px;
}

/* Darker background on mouse-over */
.btn-custom:hover {
  background-color: RoyalBlue;
}

.header-objects {
    justify-content: space-between;
}
#home{
    min-height: 50vh;
}
</style>