var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.speed = 0;
        this.name = name;
    }
    Animal.prototype.run = function (speed) {
        this.speed = speed;
        console.log(this.name + " \u0431\u0435\u0436\u0438\u0442 \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E " + this.speed + ".");
    };
    Animal.prototype.stop = function () {
        this.speed = 0;
        console.log(this.name + " \u0441\u0442\u043E\u0438\u0442.");
    };
    return Animal;
}());
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rabbit.prototype.hide = function () {
        console.log(this.name + " \u043F\u0440\u044F\u0447\u0435\u0442\u0441\u044F!");
    };
    Rabbit.prototype.run = function (speed) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (1) {
            _super.prototype.run.call(this, speed);
        }
        for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
            var p = params_1[_a];
            console.log(p);
        }
    };
    Rabbit.prototype.stop = function () {
        _super.prototype.stop.call(this); // вызываем родительский метод stop
        this.hide(); // и затем hide
    };
    return Rabbit;
}(Animal));
var RabbitSuper = /** @class */ (function (_super) {
    __extends(RabbitSuper, _super);
    function RabbitSuper(name, gun) {
        var _this = _super.call(this, name) || this;
        _this.gun = gun;
        return _this;
    }
    RabbitSuper.prototype.stop = function () {
        if (this.gun) {
            // console.log(super);
            // super.super.stop();
        }
        else {
            _super.prototype.stop.call(this);
        }
    };
    return RabbitSuper;
}(Rabbit));
function loggingIdentity(arg) {
    console.log(arg.toString());
    return arg;
}
var point = { x: 1, y: 4 };
loggingIdentity(point);
