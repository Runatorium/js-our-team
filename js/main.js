let MembriTeam = [
    {
        'nome' : 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        foto_url: 'wayne-barnett-founder-ceo.jpg' 
    },
    {
        'nome' : 'Angela Caroll',
        'ruolo': 'Chief Editor',
        foto_url: 'angela-caroll-chief-editor.jpg' 
    },
    {
        'nome' : 'Walter Gordon',
        'ruolo': 'Office Manager',
        foto_url: 'walter-gordon-office-manager.jpg' 
    },
    {
        'nome' : 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        foto_url: 'angela-lopez-social-media-manager.jpg' 
    },
    {
        'nome' : 'Scott Estrada',
        'ruolo': 'Developer',
        foto_url: 'scott-estrada-developer.jpg' 
    },
    {
        'nome' : 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        foto_url: 'barbara-ramos-graphic-designer.jpg' 
    },
]

stampasuconsole();



function stampasuconsole(){
    for(i=0; i<MembriTeam.length; i++){
        let membrocorrente = MembriTeam[i];
        console.log((membrocorrente['nome'])+(membrocorrente['ruolo'])+(membrocorrente['foto url']));
        stampasudom(i)
    }
}



function stampasudom (i){
   let nomemembrocorrente = document.getElementById('nome'+i);
   let ruolomembrocorrente = document.getElementById('ruolo'+i);
   let fotomembrocorrente = document.getElementById('foto url'+i);
   nomemembrocorrente.innerHTML = MembriTeam[i].nome;
   ruolomembrocorrente.innerHTML = MembriTeam[i].ruolo;
   urlfotomembro = MembriTeam[i].foto_url;
   fotomembrocorrente.setAttribute("src" ,"./img/"+urlfotomembro);
   console.log
}