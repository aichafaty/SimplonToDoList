window.addEventListener("load",function(){
// ==================================================Fonctionnalite gestion des taches========================================//
//============================recuperation des donnees du formulaire======
let apiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA1NTkxNCwiZXhwIjoxOTU0NjMxOTE0fQ.-2XaMjoQGUNkDKV0zxC67vLkbmRO0TJBWfX1FktKxK4"
let apiUrl ="https://hugjzyfkvsckcizjeztq.supabase.co"
valider = document.querySelector("#submit")
const description=document.querySelector("#Description")
const deadline=document.querySelector("#deadline")
const etat=document.querySelector("#etat")
const priorite=document.querySelector("#priorite")
const titre=document.querySelector("#titre")
const listeTache=document.querySelector("#listeTache")
let allTask =document.querySelector("#allTask")
// Creation du client Supabase
 supabase = supabase.createClient(apiUrl,apiKey)
//fonction d'ajout
function addTask(){
    supabase
        .from('taches')
        .insert([
            {
               
                titre: titre.value,
                description: description.value,
                date: deadline.value,
                etat: etat.value,
                priorite: priorite.value
            },
            ]).then(function(data)
                {
                    console.log(data)
                })
               
}
//fonction de lister les taches
async function getTaches()
      {
        let { data: taches, error } = await supabase
                                .from('taches')
                                .select('*')
        console.log(error)
        for(let tache of taches){
          newTask = document.createElement('div')
          newTask.innerHTML = tache.id
          allTask.appendChild(newTask)
        }
      }
getTaches()
// //fonction de suppression d'une tache
//       async function deleteTask(id)
//       {
//           let { data, error } = await supabase
//           .from('taches')
//           .delete()
//           .eq('id', id)
//       }
//     //fonction de modification d'une tache
// async function updateTask(id)
// {
//     let { data, error } = await supabase
//         .from('taches')
//         .update({ titre:"titre modifer"})
//         //.update({ titre: titre.value,description: description.value, date: deadline.value, etat:etat.value, priorite:priorite.value })
//         .eq('id',id )
// }
submit.addEventListener('click',addTask)

})