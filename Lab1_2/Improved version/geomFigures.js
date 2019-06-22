class Point
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    get _x(){
        return this.x;
    }

    set _x(val){
        this.x = val;
    }

    get _y(){
        return this.y;
    }

    set _y(val){
        this.y = val;
    }
}

class Distance
{
    constructor(a,b)
    {
        this.a = a;
        this.b = b;
    }

    length()
    {
        return Math.round(Math.sqrt((this.b.x - this.a.x)*(this.b.x - this.a.x) + (this.b.y - this.a.y)*(this.b.y - this.a.y)) * 100) / 100;
    }

    length_2()
    {
        let a = this.b.x - this.a.x;
        let b = this.b.y - this.a.y;
        //return ((this.b.x - this.a.x) * (this.b.x - this.a.x)) + ((this.b.y - this.a.y) * (this.b.y - this.a.y));
        return a * a + b * b;
    }

    notSimiliar()
    {
        if(this.a.x === this.b.x && this.a.y === this.b.y)
        {
            document.getElementById("mess1").innerHTML = `Points (${this.a.x}, ${this.a.y}) and (${this.b.x}, ${this.b.y}) are similiar! Enter other coordinates`;
            return false;
        }
        else
        {
            document.getElementById('mess1').innerHTML = "";
            return true;
        }
    }
}

class Figure
{
    constructor(type, number_of_angles)
    {
        this.type = type;
        this.number_of_angles = number_of_angles;
    }
    
    get _type()
    {
        return this.type;
    }
    
    get _angles()
    {
        return this.number_of_angles;
    }

    showType()
    {
        if(this.type.toLowerCase() === 'triangle')
        {
            document.getElementById('mess0').innerHTML = "Triangle";
        }
        else if(this.type.toLowerCase() === 'quadrilateral')
        {
            document.getElementById('mess0').innerHTML = "Quadrilateral";
        }
        else if(this.type.toLowerCase() === 'pentagon')
        {
            document.getElementById('mess0').innerHTML = "Pentagon";
        }
    }

    showAngles()
    {
        if(this.number_of_angles === 3)
        {
            document.getElementById('mess01').innerHTML = "It has 3 angles";
        }
        if(this.number_of_angles === 4)
        {
            document.getElementById('mess01').innerHTML = "It has 4 angles";
        }
        if(this.number_of_angles === 5)
        {
            document.getElementById('mess01').innerHTML = "It has 5 angles";
        }
    }

}

class Triangle extends Figure
{
    constructor(d1,d2,d3,type, number_of_angles)
    {
        super(type,number_of_angles);
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
    }

    showType() {
        super.showType();
    }

    showAngles() {
        super.showAngles();
    }

    isTriangle()
    {
        const d1_d2 = this.d1.length() + this.d2.length();
        const d2_d3 = this.d2.length() + this.d3.length();
        const d1_d3 = this.d1.length() + this.d3.length();

        if(d1_d2 <= this.d3.length() || d2_d3 <= this.d1.length() || d1_d3 <= this.d2.length())
        {
            document.getElementById('mess2').innerHTML = "This is not a triangle! Enter other points please";
            return false;
        }
        else
        {
            document.getElementById('mess2').innerHTML = "";
            return true;
        }
    }

    perimetr()
    {
        return this.d1.length() + this.d2.length() + this.d3.length();
    }

    square()
    {
        const half_p = this.perimetr() / 2;
        return Math.round(Math.sqrt(half_p * (half_p - this.d1.length()) * (half_p - this.d2.length()) * (half_p - this.d3.length())) * 100) / 100;
    }

    isRect()
    {
        const d1_2 = this.d1.length_2();
        const d2_2 = this.d2.length_2();
        const d3_2 = this.d3.length_2();
        const ad1_d2 = d1_2 + d2_2;
        const ad1_d3 = d1_2 + d3_2;
        const ad2_d3 = d2_2 + d3_2;

        if(ad1_d2 === d3_2 || ad2_d3 === d1_2 || ad1_d3 === d2_2)
        {
            document.getElementById('mess3').innerHTML = "This triangle is Rectangular";
            return true;
        }
        else
        {
            return false;
        }
    }

    isEqual()
    {
        if(this.d1.length() === this.d2.length() && this.d1.length() === this.d3.length() && this.d2.length() === this.d3.length())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    isIsos()
    {
        if(this.d1.length() === this.d2.length() || this.d1.length() === this.d3.length() || this.d2.length() === this.d3.length())
        {
            if(!this.isEqual())
            {
                document.getElementById('mess4').innerHTML = "This triangle is Isosceles";
                return true;
            }
            else {
                document.getElementById('mess4').innerHTML = "This triangle is Equilateral";
                return false;
            }
        }
        else
        {
            return false;
        }
    }
}

class Quad extends Figure
{
    constructor(d1,d2,d3,d4,d1_d2,type,number_of_angles)
    {
        super(type,number_of_angles);
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
        this.d4 = d4;
        this.d1_d2 = d1_d2;
    }
    
    showAngles() {
        super.showAngles();
    }
    
    showType() {
        super.showType();
    }

    perimetr()
    {
        return this.d1.length() + this.d2.length() + this.d3.length() + this.d4.length();
    }

    square()
    {
        const half_p = this.perimetr() / 2;
        return Math.round(Math.sqrt((half_p - this.d1.length()) * (half_p - this.d2.length()) * (half_p - this.d3.length()) * (half_p - this.d4.length())) * 100) / 100;
    }

    s_of_sq()
    {
        return this.d1.length() * this.d1.length();
    }

    s_of_rect()
    {
        return this.d1.length() * this.d2.length();
    }

    isSquare()
    {
        let d1d2 = new Triangle(this.d1,this.d2,this.d1_d2);
        if(this.d1.length() === this.d2.length() && this.d2.length() === this.d3.length() && this.d3.length() === this.d4.length() && d1d2.isRect() === true)
        {
            return true;
        }
        return false;
    }

    isRhombus()
    {
        if(this.d1.length() === this.d2.length() && this.d2.length() === this.d3.length() && this.d3.length() === this.d4.length())
        {
            if(this.isSquare())
            {
                document.getElementById('mess2').innerHTML = "This Quadrilateral is Square";
                document.getElementById('mess3').innerHTML = `Square: ${this.s_of_sq()}`;
                return false;
            }
            else
            {
                document.getElementById('mess2').innerHTML = "This Quadrilateral is Rhombus";
                document.getElementById('mess3').innerHTML = `Square: ${this.square()}`;
                return true;
            }
        }
        return false;
    }

    isRectangle()
    {
        let d1d2 = new Triangle(this.d1,this.d2, this.d1_d2);
        if(this.d1.length() === this.d3.length() && this.d2.length() === this.d4.length() && this.d1.length() !== this.d2.length() && d1d2.isRect())
        {
            return true;
        }
        return false;
    }

    isParallelogram()
    {
        if(this.d1.length() === this.d3.length() && this.d2.length() === this.d4.length() && this.d1.length() !== this.d2.length())
        {
            if(this.isRectangle())
            {
                document.getElementById('mess2').innerHTML = "This Quadrilateral is Rectangular";
                document.getElementById('mess3').innerHTML = `Square: ${this.s_of_rect()}`;
                return false;
            }
            else
            {
                document.getElementById('mess2').innerHTML = "This Quadrilateral is Parallelogram";
                document.getElementById('mess3').innerHTML = `Square: ${this.square()}`;
                return true;
            }
        }
        document.getElementById('mess3').innerHTML = `Square: ${this.square()}`;
        return false;
    }
}

class Pentagon extends Figure
{
    constructor(d1,d2,d3,d4,d5,type,number_of_angles)
    {
        super(type,number_of_angles);
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
        this.d4 = d4;
        this.d5 = d5;
    }
    
    showType() {
        super.showType();
    }
    
    showAngles() {
        super.showAngles();
    }

    perimetr()
    {
        return this.d1.length() + this.d2.length() + this.d3.length() + this.d4.length() + this.d5.length();
    }

    sq_Rt()
    {
        return this.d1.length_2() * Math.round(Math.sqrt((25 + 10 * Math.sqrt(5)) / 4) * 100) / 100;
    }

    sq()
    {
        const a = this.d1.length() / 2 / Math.tan(180 / 5);
        return Math.round(this.perimetr() * a / 2 * 100) / 100;
    }

    isRightPent()
    {
        if(this.d1.length() === this.d2.length() && this.d2.length() === this.d3.length() && this.d3.length() === this.d4.length() && this.d4.length() === this.d5.length()) {
            document.getElementById('mess2').innerHTML = "This is the Right Pentagon";
            document.getElementById('mess3').innerHTML = `Square = ${this.sq_Rt()}`;
            return true;
        }
        else {
                document.getElementById('mess3').innerHTML = `Square ABCDE = ${this.sq()}`;
                return false;
        }
    }
}

let type;
let angles;

function show(value)
{
    document.getElementById('p1').style.display = 'block';
    document.getElementById('p2').style.display = 'block';
    document.getElementById('p3').style.display = 'block';

    if(+value === 1)
    {
        document.getElementById('tri').style.display = 'block';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('quad').style.display = 'none';
        document.getElementById('pent').style.display = 'none';
        type = 'triangle';
        angles = 3;
    }
    else if(+value === 2)
    {
        document.getElementById('p4').style.display = 'block';
        document.getElementById('quad').style.display = 'block';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('pent').style.display = 'none';
        document.getElementById('tri').style.display = 'none';
        type = 'quadrilateral';
        angles = 4;
    }
    else if(+value === 3)
    {
        document.getElementById('p4').style.display = 'block';
        document.getElementById('p5').style.display = 'block';
        document.getElementById('pent').style.display = 'block';
        document.getElementById('tri').style.display = 'none';
        document.getElementById('quad').style.display = 'none';
        type = 'pentagon';
        angles = 5;
    }
}

function createFigure()
{
    let a, b;
    let figure = new Figure(type, angles);
    
    let x1 = document.getElementById('p1_x').value;
    let y1 = document.getElementById('p1_y').value;
    let p1 = new Point(x1,y1);

    let x2 = document.getElementById('p2_x').value;
    let y2 = document.getElementById('p2_y').value;
    let p2 = new Point(x2,y2);

    let x3 = document.getElementById('p3_x').value;
    let y3 = document.getElementById('p3_y').value;
    let p3 = new Point(x3,y3);

    let d1 = new Distance(p1,p2);
    let d2 = new Distance(p2,p3);
    
    if(figure._angles === 3)
    {
        let d3 = new Distance(p1,p3);

        if(!d1.notSimiliar() || !d2.notSimiliar() || !d3.notSimiliar())
        {
            return false;
        }

        const abc = new Triangle(d1,d2,d3,'triangle', 3);

        if(!abc.isTriangle())
        {
            return false;
        }

        abc.showType();
        abc.showAngles();
        abc.isRect();
        abc.isIsos();
        document.getElementById('mess5').innerHTML = `Perimetr = ${abc.perimetr()}`;
        document.getElementById('mess6').innerHTML = `Square = ${abc.square()}`;

        const ns = 'http://www.w3.org/2000/svg';
        let svgDiv = document.getElementById('figure');
        let svg = document.createElementNS(ns,'svg');
        svg.setAttributeNS(null,'width','100%');
        svg.setAttributeNS(null,'height','100%');
        svg.setAttributeNS(null,'stroke','black');
        svg.setAttributeNS(null,'viewBox','0 0 200 200');
        //svg.setAttributeNS(null,'viewBox','0 0 100 100');
        let tri = document.createElementNS(ns,'polygon');
        tri.setAttributeNS(null,'points',`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`);
        tri.setAttributeNS(null,'fill', "yellow");
        tri.setAttributeNS(null,'stroke', "black");
        svgDiv.appendChild(svg);
        svg.appendChild(tri);
        a = svgDiv;
        b = svg;


        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('tri').style.display = 'none';
        document.getElementById('btn2').style.display = 'block';
        document.getElementById('choose').style.display = 'none';

        
    }
    else if(figure._angles === 4)
    {
        let x4 = document.getElementById('p4_x').value;
        let y4 = document.getElementById('p4_y').value;
        let p4 = new Point(x4,y4);
        
        let d3 = new Distance(p3,p4);
        let d4 = new Distance(p1,p4);
        let d1_d2 = new Distance(p1,p3);

        if(!d1.notSimiliar() || !d2.notSimiliar() || !d3.notSimiliar() || !d4.notSimiliar())
        {
            return false;
        }

        const abcd = new Quad(d1,d2,d3,d4,d1_d2,'quadrilateral',4);

        abcd.showType();
        abcd.showAngles();
        abcd.isRhombus();
        abcd.isParallelogram();
        document.getElementById('mess5').innerHTML = `Perimetr = ${abcd.perimetr()}`;

        const ns = 'http://www.w3.org/2000/svg';
        let svgDiv = document.getElementById('figure');
        let svg = document.createElementNS(ns,'svg');
        svg.setAttributeNS(null,'width','100%');
        svg.setAttributeNS(null,'height','100%');
        svg.setAttributeNS(null,'stroke','black');
        svg.setAttributeNS(null,'viewBox','0 0 200 200');
        //svg.setAttributeNS(null,'viewBox','0 0 100 100');
        let quad = document.createElementNS(ns,'polygon');
        quad.setAttributeNS(null,'points',`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`);
        quad.setAttributeNS(null,'fill', "yellow");
        quad.setAttributeNS(null,'stroke', "black");
        svgDiv.appendChild(svg);
        svg.appendChild(quad);
        a = svgDiv;
        b = svg;

        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('quad').style.display = 'none';
        document.getElementById('btn2').style.display = 'block';
        document.getElementById('choose').style.display = 'none';
    }
    else if(figure._angles === 5)
    {
        let x4 = document.getElementById('p4_x').value;
        let y4 = document.getElementById('p4_y').value;
        let p4 = new Point(x4,y4);

        let x5 = document.getElementById('p5_x').value;
        let y5 = document.getElementById('p5_y').value;
        let p5 = new Point(x5,y5);
        
        let d3 = new Distance(p3,p4);
        let d4 = new Distance(p4,p5);
        let d5 = new Distance(p1,p5);

        if(!d1.notSimiliar() || !d2.notSimiliar() || !d3.notSimiliar() || !d4.notSimiliar() || !d4.notSimiliar())
        {
            return false;
        }

        const abcde = new Pentagon(d1,d2,d3,d4,d5,'pentagon',5);

        abcde.showType();
        abcde.showAngles();
        abcde.isRightPent();
        document.getElementById('mess5').innerHTML = `Perimetr = ${abcde.perimetr()}`;

        const ns = 'http://www.w3.org/2000/svg';
        let svgDiv = document.getElementById('figure');
        let svg = document.createElementNS(ns,'svg');
        svg.setAttributeNS(null,'width','100%');
        svg.setAttributeNS(null,'height','100%');
        svg.setAttributeNS(null,'stroke','black');
        svg.setAttributeNS(null,'viewBox','0 0 200 200');
        //svg.setAttributeNS(null,'viewBox','0 0 100 100');
        let pent = document.createElementNS(ns,'polygon');
        pent.setAttributeNS(null,'points',`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y} ${p5.x},${p5.y}`);
        pent.setAttributeNS(null,'fill', "yellow");
        pent.setAttributeNS(null,'stroke', "black");
        svgDiv.appendChild(svg);
        svg.appendChild(pent);
        a = svgDiv;
        b = svg;

        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('pent').style.display = 'none';
        document.getElementById('btn2').style.display = 'block';
        document.getElementById('choose').style.display = 'none';
    }

    document.getElementById('btn2').onclick = () => {
        document.getElementById('btn2').style.display = 'none';
        document.getElementById('choose').style.display = 'block';
        document.getElementById('mess0').innerHTML = '';
        document.getElementById('mess01').innerHTML = '';
        document.getElementById('mess1').innerHTML = '';
        document.getElementById('mess2').innerHTML = '';
        document.getElementById('mess3').innerHTML = '';
        document.getElementById('mess4').innerHTML = '';
        document.getElementById('mess5').innerHTML = '';
        document.getElementById('mess6').innerHTML = '';
        a.removeChild(b);
        let fig = document.getElementsByName('r1');
        fig.forEach(value => value.checked = false);
    }
    return true;
}
