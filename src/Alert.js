class Alert {


    static danger(msg){
        return `<p  class="alert alert-danger d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"> &times;</button> </p>`
    }
    static success(msg){
        return `<p  class="alert alert-success d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"> &times;</button> </p>`
    }
    static info(msg){
       return ` <p  class="alert alert-info d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"> &times;</button> </p>`
    }
    static secondary(msg){
       return ` <p  class="alert alert-secondary d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"> &times;</button> </p>`
    }
    static dark(msg){
        return `<p  class="alert alert-dark d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"> &times;</button> </p>`
    }
    static warning(msg){
        return `<p  class="alert alert-warning d-flex justify-content-between">${msg}<button class="btn btn-close" data-bs-dismiss="alert"> &times;</button> </p>`
    }

}

export default Alert;