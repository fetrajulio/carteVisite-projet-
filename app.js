const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);



class etudiant{
    constructor(nom,prenom,ddn,classe,sexe){
        this.nom=nom;
        this.prenom=prenom;
        this.ddn=ddn;
        this.classe=classe;
        this.sexe=sexe;
    }
    getNom(){
        return this.nom;
    }
    getPnom(){
        return this.prenom;
    }
    getDdn(){
        return this.ddn;
    }
    getClasse(){
        return this.classe;
    }
    getSexe(){
        return this.sexe;
    }
}

let et= new etudiant("RAKOTOARIMANANA","Nanjaharifetra Julio","19 Septembre 1999","ESSIA 5","Homme")
nom.innerHTML=et.getNom();
pnom.innerHTML=et.getPnom();
ddn.innerHTML=et.getDdn();
classe.innerHTML=et.getClasse();
sexe.innerHTML=et.getSexe();