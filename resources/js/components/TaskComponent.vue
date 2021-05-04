<template>
    <div class="container">

        <ul class="list-group m-3">
            <li class="list-group-item" v-for="task in tasks" :key="task.id">
                <a href="#">{{task.name}}</a></li>

        </ul>

    </div>
</template>

<script>
    export default {
        data(){//fonction data qui stoke des données et retourne un un objet tasks vide
          return{
              tasks:{}
          }
        },

       created()/*appel server side base de donées*/{

         axios.get('http://127.0.0.1:8000/tasksList')//route taskList
         .then(response=>this.tasks=response.data)//Fonction then qui recupere les données promesse qui ateend de facon asynchrone lme retoure des données
         //je stocke mes données dans mon objet tasks
         .catch(error=> console.log(error))//si on a une erreur
       },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
