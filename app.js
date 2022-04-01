import Alert from "./src/Alert.js";
import Storage from "./src/storage.js";

const dev_forms = document.getElementById("dev_forms");
const developer_list = document.querySelector(".developer_list");


// Add Developer Submit Event


dev_forms.addEventListener("submit", function (e) {
  e.preventDefault();

  let dev_msg = document.getElementById("dev_msg");
  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());

  let {
    dev_name,
    dev_photo,
    dev_email,
    dev_phone,
    gender,
    dev_location,
    dev_skill,
  } = data;

  if (
    dev_email == "" ||
    dev_location == "" ||
    dev_skill == "" ||
    dev_name == "" ||
    dev_phone == ""
  ) {
    dev_msg.innerHTML = Alert.danger("All Field Are Required ");
  } else {
    dev_msg.innerHTML = Alert.success("Data Stable");
    dev_forms.reset();
    let localdata = Storage;
    localdata.setData("developer", data);
    devs_data();
  }
});

devs_data();
function devs_data() {
  let data = Storage.getData("developer");

  let list_item = "";
  data.map((data, index) => {
    let {
      dev_name,
      dev_photo,
      dev_email,
      dev_phone,
      gender,
      dev_location,
      dev_skill,
    } = data;

    let imglist;
    developerphoto()
    function developerphoto() {
      if (dev_photo == "" && gender == "Male") {
        imglist = `./male avater.jpg`;
      } else if (dev_photo == "" && gender == "Female") {
        imglist = `./female avater.jpg`;
      } else {
        imglist = dev_photo;
      }
    }


    list_item += `
  <tr>
        <td>${index + 1}</td>
        <td class ="text-start">${dev_name}</td>
        <td>${dev_skill}</td>
        <td>${dev_email}</td>
        <td>${dev_phone}</td>
        <td>${gender}</td>
        <td>${dev_location}</td>
        <td>
            <img style="width: 40px; height: 40px; object-fit: cover;border-radius: 50%;"
                src="${dev_photo ? dev_photo : imglist}"
                alt=""/>
        </td>
        <td>
            <button class="btn btn-outline-primary btn-sm">
                <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            <button class="btn btn-outline-info btn-sm">
                <i class="fa fa-edit" aria-hidden="true"></i>
            </button>
            <button class="btn btn-outline-danger btn-sm">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </td>
    </tr>
   `;
  });

  developer_list.innerHTML = list_item;
}
