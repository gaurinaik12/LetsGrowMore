var form=document.querySelector("#userform");
const allUsersData=[];

//--------function to reset the form-----
const resetform=function(){
    form.classList.remove('was-validated')
    const name=document.getElementById('name');
    name.value="";
    
    const email=document.getElementById('email');
    email.value="";
    
    const website=document.getElementById('website');
    website.value="";
    
    const image=document.getElementById('image');
    image.value="";
    
    const genderE1 =document.querySelectorAll('input[name="gender"]');
    for(const rb of genderE1){
        rb.checked=false;
    }
    
    const skillE1 =document.querySelectorAll('input[name="skill"]');
    for(const rb of skillE1){
        rb.checked=false;
    }
};

//------------function to get data of the form-----------

const getData=function(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const website=document.getElementById('website').value;
    const image=document.getElementById('image').value;
    Let gender;
    Let skills=[];
    
    const genderE1=document.querySelectorAll('input[name="gender"]');
    for(const rb of genderE1){
        if(rb.checked){
            genderE1=rb.value;
            break;
        }
    };
    
    const skillE1=document.querySelectorAll('input[name="skill"]');
    for(const rb of skillE1){
        if(rb.checked){
            skillE1.push(rb.value);
        }
    }
    return{name, email, website, image, genderE1, skillE1};
};

//-------------------------adding event listener to the "enroll students" button with type submit to submit the form-----

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(form.checkValidity()){
        const data=getData();
        allUserData.push(data);
        printResult(data);
        resetForm();
    }
    else{
        form.classList.add('was-validated');
    };
    removeSpan();
});

//-----------function to remove the span tag----

function removeSpan(){
    var span=document.getElementById("span");
    if(span){
        span.remove();
    }
};

//----------function to print the form data in the right side of div by generating html elements inside the div---

function printResult(data){
    const resultE1=document.getElementById('enrolled-students');
    Let selectionHeading=null;
    if(allUserData.length==1){
        selectionHeading=document.createElement('div');
        const description=document.createElement('p');
        description.innerHTML="Description";
        description.className="description";
        
        const image=document.createElement('p');
        image.innerHTML="Image";
        image.className="Image";
        
        selectionHeading.className="selectionHeading";
        selectionHeading.append(description, image);
    };
    
    const wrapper=documnet.createElement('div');
    wrapper.className="wrapper";
    wrapper.addEventListener('click',function(e){
        console.log(e.target.className);
        if(e.target.className.includes('userDeleteBtn')){
            console.log('aaadfasdfasdf');
            e.currentTarget.remove();
        }
    });
    
    const deleteBtn=document.createElement('button');
    deleteBtn.innerHTML="+";
    deleteBtn.className="userDeleteBtn";
    
    const textInfoContainer=document.createElement('div');
    textInfoContainer.className="texrInfoContainer";
    
    const imageContainer=document.createElement('div');
    imageContainer.className="imageContainer";
    
    const imageHyperlink=document.createElement('a');
    imageHyperlink.href=data.image;
    imageHyperlink.target="_blank";
    
    Let name=document.createElement('p');
    name.className="infoText userName";
    name.innerHTML=data.name;
    
    Let gender=document.createElement('p');
    gender.className="infoText gender";
    gender.innerHTML=data.gender;
    
    Let email=document.createElement('p');
    email.className="infoText email";
    email.innerHTML=data.email;
    
    Let website=document.createElement('a');
    website.className="infoText website";
    website.innerHTML=data.website;
    website.href=data.website;
    website.target="_blank";
    
    Let skills=document.createElement('p');
    skills.className="infoText skills";
    skills.innerHTML=data.skills.join(', ');
    
    Let userImage=document.createElement('img');
    userImage.className="userImage";
    userImage.src=data.image;
    
    textInfoContainer.append(name, gender, email, website, skills);
    imageHyperlink.appendChild(userImage);
    imageContainer.appendChild(imageHyperlink);
    
    wrapper.append(textInfoContainer, imageContainer, deleteBtn);
    
    if(selectionHeadinng==null){
        resultE1.append(wrapper);
    }
    else{
        resultE1.append(selectionHeading, wrapper)
    };
};

