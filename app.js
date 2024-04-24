var a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
}

let brand = document.getElementById('brand');
let model = document.getElementById('model');
let device = document.getElementById('device');

let allBrands = Object.keys(a.mobiles);

for (let i = 0; i < allBrands.length; i++) {
    brand.innerHTML += `<option>${allBrands[i]}</option>`;
}

function selectBrand() {
    let selectedBrand = brand.value;
    let allModels = Object.keys(a.mobiles[selectedBrand]);

    let brandDetails = document.getElementById('brand-details');

    brandDetails.innerHTML = '';

    brandDetails.innerHTML += `
    <div class="card-body">
            <h5 class="card-title">${selectedBrand}</h5>
`;

    model.innerHTML = '';
    for (let i = 0; i < allModels.length; i++) {
        model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
        brandDetails.innerHTML += `
            <p class="card-text">${allModels[i]}</p>
    `;
    }

    // Close the card body and card divs
    brandDetails.innerHTML += `
    </div>`;


    console.log(allModels);
}

function selectModel() {
    let selectedBrand = brand.value;
    let selectedModel = model.value;

    let selectedMobile = a.mobiles[selectedBrand][selectedModel];

    device.innerHTML = '';
    device.innerHTML += `<option>Select Device</option>`;
    device.innerHTML += `<option value="${selectedMobile.ram}">${selectedMobile.ram}</option>
        <option value="${selectedMobile.rom}">${selectedMobile.rom}</option>
        <option value="${selectedMobile.camera}">${selectedMobile.camera}</option>
        <option value="${selectedMobile.price}">${selectedMobile.price}</option>
        `;
    // let allMobiles = Object.keys(a.mobiles[selectedBrand][selectedModel]);

    let deviceDetails = document.getElementById('model-details');
    deviceDetails.innerHTML = '';
    deviceDetails.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${selectedMobile.name}</h5>
                <p class="card-text">RAM: ${selectedMobile.ram}</p>
                <p class="card-text">ROM: ${selectedMobile.rom}</p>
                <p class="card-text">Camera: ${selectedMobile.camera}</p>
                <p class="card-text">Price: ${selectedMobile.price}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
                </ br>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>`;

    console.log(selectedMobile);
    console.log(selectedMobile.name);
    console.log(selectedBrand, selectedModel);

}

function selectDevice() {
    let selectedDevice = device.value;
    let singleDevice = document.getElementById('device-details');
    singleDevice.innerHTML = '';
    singleDevice.innerHTML += `
    <div class="card">
        <div class="card-body">
            <p class="card-text">${selectedDevice}</p>
        </div>
    </div>`;
}
