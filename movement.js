    AFRAME.registerComponent('movement', {
        schema:{
            acceleration: {type: 'float', default: 5},
            decceleration: {type: 'float', default: 0.09},
            maxSpeed: {type: 'float', default: 30}
        },

        init: function(){
            this.dron = document.querySelector('#dron');
            this.velocity = new THREE.Vector3(0, 0, 0);
            this.btnup = document.querySelector('#boton_arriba');
            this.btndown = document.querySelector('#boton_abajo');
            this.btnfwd = document.querySelector('#boton_recto');
            this.btnback = document.querySelector('#boton_atras');
            this.btnright = document.querySelector('#boton_der');
            this.btnleft = document.querySelector('#boton_izq');
            

            this.btnup.addEventListener('mousedown', this.buttonUpPress.bind(this));
            this.btnup.addEventListener('mouseup', this.buttonUpRelease.bind(this));

            this.btndown.addEventListener('mousedown', this.buttonDownPress.bind(this));
            this.btndown.addEventListener('mouseup', this.buttonDownRelease.bind(this));

            this.btnfwd.addEventListener('mousedown', this.buttonFwdPress.bind(this));
            this.btnfwd.addEventListener('mouseup', this.buttonFwdRelease.bind(this));

            this.btnback.addEventListener('mousedown',this.buttonBackPress.bind(this));
            this.btnback.addEventListener('mouseup', this.buttonBackRelease.bind(this));

            this.btnright.addEventListener('mousedown', this.buttonRightPress.bind(this));
            this.btnright.addEventListener('mouseup', this.buttonRightRelease.bind(this));

            this.btnleft.addEventListener('mousedown', this.buttonLeftPress.bind(this));
            this.btnleft.addEventListener('mouseup', this.buttonLeftRelease.bind(this));
        },
            
        buttonUpPress: function () {
            this.velocity.y += this.data.acceleration;
        },

        buttonUpRelease: function(){
            this.velocity.y = 0;
        }, 
        
        buttonDownPress: function(){
            this.velocity.y -= this.data.acceleration;
        },

        buttonDownRelease: function(){
            this.velocity.y = 0;
        },

        buttonFwdPress: function(){
            this.velocity.z -= this.data.acceleration;
        },

        buttonFwdRelease: function(){
            this.velocity.z = 0;
        },

        buttonBackPress: function(){
            this.velocity.z += this.data.acceleration;
        },

        buttonBackRelease: function(){
            this.velocity.z = 0;
        },

        buttonRightPress: function(){
            this.velocity.x += this.data.acceleration;
        },

        buttonRightRelease: function(){
            this.velocity.x = 0;
        },

        buttonLeftPress: function(){
            this.velocity.x -= this.data.acceleration;
        },

        buttonLeftRelease: function(){
            this.velocity.x = 0;
        },

        tick: function(time, Timedelta){
            var delta = Timedelta / 1000;

            if(this.velocity.lengthSq() > 0){
                const deccelVector = this.velocity.clone().normalize().multiplyScalar(-1 * this.data.decceleration);
                this.velocity.add(deccelVector);
            }

            if(this.velocity.length() > this.data.maxSpeed){
                this.velocity.normalize().multiplyScalar(this.maxSpeed);
            }

            const displacement = this.velocity.clone().multiplyScalar(delta);
            this.dron.object3D.position.add(displacement);
        }
    }),

    
    AFRAME.registerComponent('botonup', {
        events: {
            mousedown: function(evt){
                console.log("El elemento boton_arriba ha sido CLICKEADO!");
            },

            mouseup: function(evt){
                console.log("El elemento boton_arriba ha sido DESCLICKEADO!");
            }
        },
    }),

    AFRAME.registerComponent('botondown', {
        events: {
            mousedown: function(evt){
                console.log("Elemento boton_abajo ha sido CLICKEADO");
            },
            mouseup: function(evt){
                console.log("El elemento boton_abajo ha sido DESCLICKEADO!");
            }
        }
    }),

    AFRAME.registerComponent('botonstraight', {
        events: {
            mousedown: function(evt){
                console.log("El elemento boton_recto ha sido CLICKEADO!");
            },
            mouseup: function(evt){
                console.log("El elemento boton_recto ha sido DESCLICKEADO!");
            }
        },
    }),

    AFRAME.registerComponent('botonback', {
        events: {
            mousedown: function(evt){
                console.log("El elemento boton_atras ha sido CLICKEADO!");
            },
            mouseup: function(evt){
                console.log("El elemento boton_atras ha sido DESCLICKEADO!");
            }
        },
    }),
    AFRAME.registerComponent('botonright', {
        events: {
            mousedown: function(evt){
                console.log("El elemento boton_derch ha sido CLICKEADO!");
            },
            mouseup: function(evt){
                console.log("El elemento boton_derch ha sido DESCLICKEADO!");
            }
        },
    }),
    AFRAME.registerComponent('botonleft', {
        events: {
            mousedown: function(evt){
                console.log("El elemento boton_izq ha sido CLICKEADO!");
            },
            mouseup: function(evt){
                console.log("El elemento boton_izq ha sido DESCLICKEADO!");
            }
        },
    })
