const peets = [];

      class pet {
        constructor(_petname, _owner, _specie, _breed) {
          this.petname = _petname;
          this.owner = _owner;
          this.specie = _specie;
          this.breed = _breed;
        }
      }

      const renderList = function () {
        const petsList = document.getElementById("petsList");
        petsList.innerHTML = "";
        peets.forEach((pet) => {
          const newLi = document.createElement("li");
          newLi.innerText = `${pet.petname} ${pet.owner} - ${pet.specie} ${pet.breed}`;
          petsList.appendChild(newLi);
        });
      };

      const formReference = document.getElementById("petForm");
      formReference.addEventListener("submit", function (e) {
        e.preventDefault();

        const petname = document.getElementById("petname").value;
        const owner = document.getElementById("owner").value;
        const specie = document.getElementById("specie").value;
        const breed = document.getElementById("breed").value;

        const newPet = new pet(petname, owner, specie, breed);

        peets.push(newPet);
        document.getElementById("petname").value = "";
        document.getElementById("owner").value = "";
        document.getElementById("specie").value = "";
        document.getElementById("breed").value = "";
        renderList();

        
      });

      function checkForDuplicateOwners() {
        const owners = {};
        let doppioni = false;

        for (const pet of peets) {
          const owner = pet.owner.toLowerCase();

          if (owners[owner]) {
            doppioni = true;
            break;
          } else {
            owners[owner] = true;
          }
        }

        console.log("Ci sono Propietari che hanno più animali?", doppioni);
      }