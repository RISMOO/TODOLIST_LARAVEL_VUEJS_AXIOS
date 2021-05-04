<template>
    <div class="container">
        <div class="row justify-content-center m-3">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Bienvenue sur votre todolist</div>

                    <div class="card-body">
                        La liste des taches est recuperée avec la bibiotheque Axios qui communique avec la bsase de donnée 'Mysql' en utilsant les requetes.
                        Vous pouvez naviguer avec les differents onglets sans avoir a rafraichir la page.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
