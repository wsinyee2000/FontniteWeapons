var request = new XMLHttpRequest();
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  request.open('GET', proxyurl+'https://fortniteapi.io/v1/loot/list?lang=en');
  request.setRequestHeader('Authorization', '5b80a973-bbf3638c-2d35fc67-768cb542');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
        var data = JSON.parse(this.responseText);



        const weapons = Object.keys(data.weapons);
        var weaponList = document.getElementById("weaponList");

        for (let i = 0; i < weapons.length; i++) {
            //Create tr
            var tr = document.createElement("tr");

            //Create td
            var img_td = document.createElement("td");

            var name_td = document.createElement("td");
            var rarity_td = document.createElement("td");
            var type_td = document.createElement("td");
            var dmg_td = document.createElement("td");
            var firingRate_td = document.createElement("td");
            var clipSize_td = document.createElement("td");
            var reloadTime_td = document.createElement("td");
            var BPC_td = document.createElement("td");
            var spread_td = document.createElement("td");
            var spreadDownsights_td = document.createElement("td");
            var damageZone_td = document.createElement("td");
            var description_td = document.createElement("td");

            //Create img
            var img = document.createElement("img");

            //get images
            var weaponImgs = data.weapons[i].images.background;

            //add tr to the list
            weaponList.appendChild(tr);

            //add img to list
            tr.appendChild(img_td);
            img_td.appendChild(img);
            img.src = weaponImgs;

            //add name to list
            tr.appendChild(name_td);
            name_td.textContent = data.weapons[i].name;

            //add Rarity to list
            tr.appendChild(rarity_td);
            rarity_td.textContent = data.weapons[i].rarity;

            //add Type to list
            tr.appendChild(type_td);
            type_td.textContent = data.weapons[i].type;

            //add DmgPB to list
            tr.appendChild(dmg_td);
            dmg_td.textContent = data.weapons[i].mainStats.DmgPB;

            //add firingRate to list
            tr.appendChild(firingRate_td);
            firingRate_td.textContent = data.weapons[i].mainStats.FiringRate;

            //add ClipSize to list
            tr.appendChild(clipSize_td);
            clipSize_td.textContent = data.weapons[i].mainStats.ClipSize;

            //add ReloadTime to list
            tr.appendChild(reloadTime_td);
            reloadTime_td.textContent = data.weapons[i].mainStats.ReloadTime;
            
            //add BulletsPerCartridge to list
            tr.appendChild(BPC_td);
            BPC_td.textContent = data.weapons[i].mainStats.BulletsPerCartridge;

            //add Spread to list
            tr.appendChild(spread_td);
            spread_td.textContent = data.weapons[i].mainStats.Spread;

            //add SpreadDownsights to list
            tr.appendChild(spreadDownsights_td);
            spreadDownsights_td.textContent = data.weapons[i].mainStats.SpreadDownsights;

            //add DamageZone_Critical to list
            tr.appendChild(damageZone_td);
            damageZone_td.textContent = data.weapons[i].mainStats.DamageZone_Critical;

            //add description to list
            tr.appendChild(description_td);
            description_td.textContent = data.weapons[i].description;
        }

        
    }
};

request.send();

