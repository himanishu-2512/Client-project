const person = [
    {
        id: 1,
        name: "Daniel Taylor",
        img: "https://th.bing.com/th/id/OIP.IHYVwKmC6cWlwNrAxLyGsQAAAA?w=182&h=231&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        post: "Graphic Designer",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam distinctio amet sint saepe architecto quisquam nostrum voluptate soluta cum dignissimos dolore ipsam, culpa inventore, nesciunt numquam, nobis repudiandae ipsa! Tempora magni asperiores autem at.",
    },
    {
        id: 2,
        name: "Kaithy",
        img: "https://th.bing.com/th/id/OIP.Zck_zhbBUys-FaSlLz739gHaJl?w=182&h=236&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        post: "Creative Head",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam distinctio amet sint saepe architecto quisquam nostrum voluptate soluta cum dignissimos dolore ipsam, culpa inventore, nesciunt numquam, nobis repudiandae ipsa! Tempora magni asperiores autem at.",
    
    },
    {
        id: 3,
        name: "Lanester Lofy",
        img: "https://th.bing.com/th/id/OIP.2yd7kYVp3CoquIHprfMdngHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        post: "App Developer",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam distinctio amet sint saepe architecto quisquam nostrum voluptate soluta cum dignissimos dolore ipsam, culpa inventore, nesciunt numquam, nobis repudiandae ipsa! Tempora magni asperiores autem at.",
    
    },
    {
        id: 4,
        name: "Christinia",
        img: "https://th.bing.com/th/id/OIP.vJDIDb4dspaQcDXH4KcGBgHaKD?w=182&h=247&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        post: "Asistant Manager",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam distinctio amet sint saepe architecto quisquam nostrum voluptate soluta cum dignissimos dolore ipsam, culpa inventore, nesciunt numquam, nobis repudiandae ipsa! Tempora magni asperiores autem at.",
    
    },
    {
        id: 5,
        name: "Hazel Grace",
        img: "https://th.bing.com/th/id/OIP.ite5-awq469xy2dNT0I_WQAAAA?w=131&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        post: "Web Developer",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam distinctio amet sint saepe architecto quisquam nostrum voluptate soluta cum dignissimos dolore ipsam, culpa inventore, nesciunt numquam, nobis repudiandae ipsa! Tempora magni asperiores autem at.",
    
    },
    {
        id: 6,
        name: "Lorenz Tarence",
        img: "https://th.bing.com/th/id/OIP.zBgZ7m8Jbuy93p9X_nG-2gHaIH?w=182&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        post: "Manager",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam distinctio amet sint saepe architecto quisquam nostrum voluptate soluta cum dignissimos dolore ipsam, culpa inventore, nesciunt numquam, nobis repudiandae ipsa! Tempora magni asperiores autem at.",
    
    },
];
const name=document.querySelector('.name');
const post=document.querySelector('.post');
const img=document.querySelector('.img');
const info=document.querySelector('.info');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

let current=0;
window.addEventListener("DOMContentLoaded",()=>{
    p=person[current]
    
    name.textContent=p.name;
    post.textContent=p.post;
    img.style.backgroundImage=`url(${p.img})`;
    info.textContent=p.info;
})
prev.addEventListener("click",()=>{
    current=current-1;
    if (current==-1){
        current=person.length-1
    }
    p=person[current];
    name.textContent=p.name;
    post.textContent=p.post;
    img.style.backgroundImage=`url(${p.img})`;
    info.textContent=p.info;
    
})
next.addEventListener("click",()=>{
    current=current+1;
    if (current==6){
        current=0
    }
    p=person[current];
    name.textContent=p.name;
    post.textContent=p.post;
    img.style.backgroundImage=`url(${p.img})`;
    info.textContent=p.info;
   
})