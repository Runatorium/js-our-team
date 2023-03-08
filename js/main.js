let MembriTeam = [
    {
        'nome' : 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto url': 'wayne-barnett-founder-ceo.jpg' 
    },
    {
        'nome' : 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto url': 'angela-caroll-chief-editor.jpg' 
    },
    {
        'nome' : 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto url': 'walter-gordon-office-manager.jpg' 
    },
    {
        'nome' : 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto url': 'angela-lopez-social-media-manager.jpg' 
    },
    {
        'nome' : 'Scott Estrada',
        'ruolo': 'Developer',
        'foto url': 'scott-estrada-developer.jpg' 
    },
    {
        'nome' : 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto url': 'barbara-ramos-graphic-designer.jpg' 
    },
]


for(i=0; i<MembriTeam.length; i++){
    let membrocorrente = MembriTeam[i];
    console.log((membrocorrente['nome'])+(membrocorrente['ruolo'])+(membrocorrente['foto url']));
}

/*
for(i=0;i<MembriTeam.length; i++){
    console.log(MembriTeam[i]);
}
*/
