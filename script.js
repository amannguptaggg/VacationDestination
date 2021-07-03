(function(){
    const formDetails = document.getElementById('destinationDetailsForms');

    formDetails.addEventListener('submit',function(e){
        e.preventDefault();

        let desName = e.target.elements['name'].value;
        let desLoc = e.target.elements['location'].value;
        let desPhoto = e.target.elements['photo'].value;
        let desDes = e.target.elements['description'].value;

        for(let i = 0; i < formDetails.length;i++){
            formDetails.elements[i].value = '';
            
        }

         //adding create card
         let wishListContainer = document.getElementById('destinationContainer');

         if(wishListContainer.children.length === 0){
             document.getElementById('title').innerHTML = 'My wish list';
         }

        var desCard = createDestinationCard(desName,desLoc,desPhoto,desDes);
    
        document.getElementById('destinationContainer').appendChild(desCard);
    });


    function createDestinationCard(name,location,photo,description){

        console.log(name,location,photo,description);
        let card = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('alt',name);
        card.className = 'card';

        let constantPhotoURL = './images/signpost.jpg';

        if (photo.length === 0) {
            img.src = constantPhotoURL;
        } else {
            img.setAttribute('src',photo)
        }

        card.appendChild(img)

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardTitle = document.createElement('h3');
        cardTitle.innerHTML = name;
        cardBody.appendChild(cardTitle);

        let cardSubTitle = document.createElement('h4');
        cardSubTitle.innerHTML = location;
        cardBody.appendChild(cardSubTitle);
        
        if(description.length !== 0){
            let cardText = document.createElement('p');
            cardText.innerHTML = description;
            cardText.className = 'card-text';
            cardBody.appendChild(cardText);
        }

        let cardDelBtn = document.createElement('button');
        cardDelBtn.innerHTML='Remove';
        cardDelBtn.addEventListener('click',removeDestination);
        
        cardBody.appendChild(cardDelBtn);


        card.appendChild(cardBody)

        return card;
    }


    function removeDestination(event){
        let card = event.target.parentElement.parentElement;
        card.remove();
    }

}());