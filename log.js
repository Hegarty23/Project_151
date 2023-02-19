AFRAME.registerComponent("log", {
    schema: {
        message: {type:"string", default:"Hello World."}
    },
    init: function(){
        console.log(this.data.message)
    }
})
//schema is an object that defines the property, names, type and default value. basic info of what the class is about.
//name is the component name. It is a string data type i.e. log is the name of the component.
//definition contains the component definition. It is a JavaScript object which has schema and lifecycle handler methods.
//lifecycle handler methods are init, update, tick, remove.
//init is used to set up the initial state and it is called once when the component is initialised. 
//update is used to modify the entity.
//remove is used to undo all previous modifications to the entity.
//tick is used for checking continously changes. It is called on every render loop on the scene(a-scene tag).
//this.el.getAttribute is used to get the current value of the position(or rotation, scale e.t.c.) attribute.
//this.el.setAttribute is used to set the updated value of the position(or rotation, scale e.t.c.) attribute.
//this.el gives reference to the entity as an html element.
//Component property values defined in the schema can be accessed through "this.data"
//class is a blueprint.