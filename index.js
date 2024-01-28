const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
const observer2=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }
    });
});
const observer3=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show3');
        }
    });
});
const observer4=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show4');
        }
    });
});
const observer5=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show5');
        }
    });
});




const hidde=document.querySelectorAll('.hidden2');
hidde.forEach((el)=>observer2.observe(el))

const hiddenelemenst=document.querySelectorAll('.hidden');
hiddenelemenst.forEach((el)=>observer.observe(el));

const h=document.querySelectorAll('.hidden3');
h.forEach((el)=>observer3.observe(el));

const a=document.querySelectorAll('.hidden4');
a.forEach((el)=>observer4.observe(el));

const b=document.querySelectorAll('.hidden5');
b.forEach((el)=>observer5.observe(el));