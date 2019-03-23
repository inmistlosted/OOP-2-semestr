describe("Distances",() => {
    describe("Length of distance",() => {
        it("a distance between point(0,0) and point(0,2) = 2", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(0,2);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length(),2);
        });

        it("a distance between point(0,0) and point(2,2) = 2.83", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(2,2);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length(),2.83);
        });

        it("a distance between point(3,0) and point(0,2) = 3.61", () => {
            const p1 = new Point(3,0);
            const p2 = new Point(0,2);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length(),3.61);
        });

        it("a distance between point(-3,-5) and point(6,9) = 16.64", () => {
            const p1 = new Point(-3,-5);
            const p2 = new Point(6,9);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length(),16.64);
        });
    });

    describe("Squared length of Distance", () => {
        it("a squared distance between point(3,4) and point(1,9) = 29", () => {
            const p1 = new Point(3,4);
            const p2 = new Point(1,9);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length_2(),29);
        });

        it("a squared distance between point(-1,-7) and point(8,0) = 130", () => {
            const p1 = new Point(-1,-7);
            const p2 = new Point(8,0);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length_2(),130);
        });

        it("a squared distance between point(2,-1) and point(3,5) = 37", () => {
            const p1 = new Point(2,-1);
            const p2 = new Point(3,5);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length_2(),37);
        });

        it("a squared distance between point(-14,27) and point(20,15) = 1300", () => {
            const p1 = new Point(-14,27);
            const p2 = new Point(20,15);
            const d1 = new Distance(p1,p2);
            assert.equal(d1.length_2(),1300);
        });
    });

    describe("Identity of points", () => {
        it("point(2,-1) and point(3,5) are not the same one: TRUE", () => {
            const p1 = new Point(2,-1);
            const p2 = new Point(3,5);
            const d1 = new Distance(p1,p2);
            assert.isTrue(d1.notSimiliar());
        });

        it("point(-3,-4) and point(3,4) are not the same one: TRUE", () => {
            const p1 = new Point(-3,-4);
            const p2 = new Point(3,4);
            const d1 = new Distance(p1,p2);
            assert.isTrue(d1.notSimiliar());
        });

        it("point(-1,-7) and point(8,0) are not the same one: TRUE", () => {
            const p1 = new Point(-1,-7);
            const p2 = new Point(8,0);
            const d1 = new Distance(p1,p2);
            assert.isTrue(d1.notSimiliar());
        });

        it("point(8,9) and point(8,9) are not the same one: FALSE", () => {
            const p1 = new Point(8,9);
            const p2 = new Point(8,9);
            const d1 = new Distance(p1,p2);
            assert.isFalse(d1.notSimiliar());
        });
    });
});

describe("Triangles", () => {
    describe("Existence of Triangle", () => {
        it("Triangle made with point(2,-1), point(3,5) and point(9,0) exists: TRUE", () => {
            const p1 = new Point(2,-1);
            const p2 = new Point(3,5);
            const p3 = new Point(9,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isTrue(abc.isTriangle());
        });

        it("Triangle made with point(0,0), point(2,2) and point(4,4) exists: FALSE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(2,2);
            const p3 = new Point(4,4);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isTriangle());
        });

        it("Triangle made with point(2,3), point(3,2) and point(9,14) exists: FALSE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(2,2);
            const p3 = new Point(4,4);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isTriangle());
        });

        it("Triangle made with point(3,3), point(3,5) and point(5,3) exists: TRUE", () => {
            const p1 = new Point(3,3);
            const p2 = new Point(3,5);
            const p3 = new Point(5,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isTrue(abc.isTriangle());
        });
    });

    describe("Perimetr of Triangle", () => {
        it("Perimetr of Triangle made with point(3,3), point(3,8) and point(6,3) = 13.83", () => {
            const p1 = new Point(3,3);
            const p2 = new Point(3,8);
            const p3 = new Point(6,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.equal(abc.perimetr(), 13.83);
        });

        it("Perimetr of Triangle made with point(2,-1), point(3,5) and point(9,0) = 20.96", () => {
            const p1 = new Point(2,-1);
            const p2 = new Point(3,5);
            const p3 = new Point(9,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.equal(abc.perimetr(), 20.96);
        });

        it("Perimetr of Triangle made with point(1,1), point(3,7) and point(5,1) = 16.64", () => {
            const p1 = new Point(1,1);
            const p2 = new Point(3,7);
            const p3 = new Point(5,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.equal(abc.perimetr(), 16.64);
        });
    });

    describe("Square of Triangle", () => {
        it("Square of Triangle made with point(3,3), point(3,8) and point(6,3) = 7.5", () => {
            const p1 = new Point(3,3);
            const p2 = new Point(3,8);
            const p3 = new Point(6,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.equal(abc.square(), 7.5);
        });

        it("Square of Triangle made with point(2,-1), point(3,5) and point(9,0) = 20.49", () => {
            const p1 = new Point(2,-1);
            const p2 = new Point(3,5);
            const p3 = new Point(9,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.equal(abc.square(), 20.49);
        });

        it("Square of Triangle made with point(1,1), point(3,7) and point(5,1) = 11.99", () => {
            const p1 = new Point(1,1);
            const p2 = new Point(3,7);
            const p3 = new Point(5,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.equal(abc.square(), 11.99);
        });
    });

    describe("Rectangle Triangle", () => {
        it("Triangle made with point(0,0), point(3,0) and point(3,3) is Rectangle: TRUE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isTrue(abc.isRect());
        });

        it("Triangle made with point(0,5), point(3,0) and point(7,0) is Rectangle: FALSE", () => {
            const p1 = new Point(0,5);
            const p2 = new Point(3,0);
            const p3 = new Point(7,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isRect());
        });

        it("Triangle made with point(1,1), point(3,7) and point(5,1) is Rectangle: FALSE", () => {
            const p1 = new Point(1,1);
            const p2 = new Point(3,7);
            const p3 = new Point(5,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isRect());
        });
    });

    describe("Equilateral Triangle", () => {
        it("Triangle made with point(0,0), point(3,0) and point(3,3) is Equilateral: FALSE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isEqual());
        });

        it("Triangle made with point(0,5), point(3,0) and point(7,0) is Equilateral: FALSE", () => {
            const p1 = new Point(0,5);
            const p2 = new Point(3,0);
            const p3 = new Point(7,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isEqual());
        });

        it("Triangle made with point(1,1), point(3,7) and point(5,1) is Equilateral: FALSE", () => {
            const p1 = new Point(1,1);
            const p2 = new Point(3,7);
            const p3 = new Point(5,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isEqual());
        });
    });

    describe("Isosceles Triangle", () => {
        it("Triangle made with point(0,0), point(3,0) and point(3,3) is Isosceles: TRUE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isTrue(abc.isIsos());
        });

        it("Triangle made with point(0,5), point(3,0) and point(7,0) is Isosceles: FALSE", () => {
            const p1 = new Point(0,5);
            const p2 = new Point(14,0);
            const p3 = new Point(7,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isFalse(abc.isIsos());
        });

        it("Triangle made with point(1,1), point(3,7) and point(5,1) is Isosceles: TRUE", () => {
            const p1 = new Point(1,1);
            const p2 = new Point(3,7);
            const p3 = new Point(5,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p1,p3);
            const abc = new Triangle(d1,d2,d3);
            assert.isTrue(abc.isIsos());
        });
    });
});

describe("Quadrilateral", () => {
    describe("Perimetr of Quadrilateral", () => {
        it("Perimetr of Quadrilateral made with point(0,0), point(3,0), point(3,3) and point(0,3) = 12", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const p4 = new Point(0,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.perimetr(), 12);
        });

        it("Perimetr of Quadrilateral made with point(0,0), point(5,7), point(8,9) and point(12,3) = 31.79", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(5,7);
            const p3 = new Point(8,9);
            const p4 = new Point(12,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.perimetr(), 31.79);
        });

        it("Perimetr of Quadrilateral made with point(2,0), point(4,5), point(8,5) and point(10,0) = 22.78", () => {
            const p1 = new Point(2,0);
            const p2 = new Point(4,5);
            const p3 = new Point(8,5);
            const p4 = new Point(10,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.perimetr(), 22.78);
        });
    });

    describe("Quadrate", () => {
        it("Quadrilateral made with point(0,0), point(3,0), point(3,3) and point(0,3) is Quadrate: TRUE", () => {
            const p1 = new Point(0, 0);
            const p2 = new Point(3, 0);
            const p3 = new Point(3, 3);
            const p4 = new Point(0, 3);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isSquare());
        });

        it("Quadrilateral made with point(0,0), point(5,7), point(8,9) and point(12,3) is Quadrate: FALSE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(5,7);
            const p3 = new Point(8,9);
            const p4 = new Point(12,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.isFalse(abcd.isSquare());
        });

        it("Quadrilateral made with point(2,4), point(2,8), point(6,8) and point(6,4) is Quadrate: TRUE", () => {
            const p1 = new Point(2,4);
            const p2 = new Point(2,8);
            const p3 = new Point(6,8);
            const p4 = new Point(6,4);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isSquare());
        });
    });

    describe("Square of Quadrate", () => {
        it("Square of Quadrate made with point(0,0), point(3,0), point(3,3) and point(0,3) = 9", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const p4 = new Point(0,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.s_of_sq(), 9);
        });

        it("Square of Quadrate made with point(2,4), point(2,8), point(6,8) and point(6,4) = 16", () => {
            const p1 = new Point(2,4);
            const p2 = new Point(2,8);
            const p3 = new Point(6,8);
            const p4 = new Point(6,4);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.s_of_sq(), 16);
        });
    });

    describe("Rectangle", () => {
        it("Quadrilateral made with point(2,3), point(6,-1), point(8,-5) and point(4,0) is Rectangle: FALSE", () => {
            const p1 = new Point(2,3);
            const p2 = new Point(6,-1);
            const p3 = new Point(8,-5);
            const p4 = new Point(4,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.isFalse(abcd.isRectangle());
        });

        it("Quadrilateral made with point(0,0), point(0,4), point(9,4) and point(9,0) is Rectangle: TRUE", () => {
            const p1 = new Point(0, 0);
            const p2 = new Point(0, 4);
            const p3 = new Point(9, 4);
            const p4 = new Point(9, 0);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isRectangle());
        });

        it("Quadrilateral made with point(2,3), point(4,3), point(4,-2) and point(2,-2) is Rectangle: TRUE", () => {
            const p1 = new Point(2,3);
            const p2 = new Point(4,3);
            const p3 = new Point(4,-2);
            const p4 = new Point(2,-2);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isRectangle());
        });
    });

    describe("Square of Rectangle", () => {
        it("Square of Rectangle made with point(0,0), point(0,4), point(9,4) and point(9,0) = 36", () => {
            const p1 = new Point(0, 0);
            const p2 = new Point(0, 4);
            const p3 = new Point(9, 4);
            const p4 = new Point(9, 0);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.equal(abcd.s_of_rect(), 36);
        });

        it("Square of Rectangle made with point(2,3), point(4,3), point(4,-2) and point(2,-2) = 10", () => {
            const p1 = new Point(2, 3);
            const p2 = new Point(4, 3);
            const p3 = new Point(4, -2);
            const p4 = new Point(2, -2);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.equal(abcd.s_of_rect(), 10);
        });
    });

    describe("Parallelogram", () => {
        it("Quadrilateral made with point(0,0), point(2,4), point(9,4) and point(7,0) is Parallelogram: TRUE", () => {
            const p1 = new Point(0, 0);
            const p2 = new Point(2, 4);
            const p3 = new Point(9, 4);
            const p4 = new Point(7, 0);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isParallelogram());
        });

        it("Quadrilateral made with point(1,3), point(1,9), point(5,12) and point(5,6) is Parallelogram: TRUE", () => {
            const p1 = new Point(1,3);
            const p2 = new Point(1,9);
            const p3 = new Point(5,12);
            const p4 = new Point(5,6);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isParallelogram());
        });

        it("Quadrilateral made with point(2,3), point(6,-1), point(8,-5) and point(4,0) is Parallelogram: FALSE", () => {
            const p1 = new Point(2,3);
            const p2 = new Point(6,-1);
            const p3 = new Point(8,-5);
            const p4 = new Point(4,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.isFalse(abcd.isParallelogram());
        });
    });

    describe("Rhombus", () => {
        it("Quadrilateral made with point(0,0), point(2,4), point(0,8) and point(-2,4) is Rhombus: TRUE", () => {
            const p1 = new Point(0, 0);
            const p2 = new Point(2, 4);
            const p3 = new Point(0, 8);
            const p4 = new Point(-2, 4);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isRhombus());
        });

        it("Quadrilateral made with point(0,0), point(5,7), point(8,9) and point(12,3) is Rhombus: FALSE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(5,7);
            const p3 = new Point(8,9);
            const p4 = new Point(12,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.isFalse(abcd.isRhombus());
        });

        it("Quadrilateral made with point(2,3), point(7,7), point(12,3) and point(7,-1) is Rhombus: TRUE", () => {
            const p1 = new Point(2,3);
            const p2 = new Point(7,7);
            const p3 = new Point(12,3);
            const p4 = new Point(7,-1);
            const d1 = new Distance(p1, p2);
            const d2 = new Distance(p2, p3);
            const d3 = new Distance(p3, p4);
            const d4 = new Distance(p1, p4);
            const d1_d2 = new Distance(p1, p3);
            const abcd = new Quad(d1, d2, d3, d4, d1_d2);
            assert.isTrue(abcd.isRhombus());
        });
    });

    describe("Common square of Quadrilateral", () => {
        it("Common square of Quadrilateral made with point(2,3), point(6,-1), point(8,-5) and point(4,0) = 24.2", () => {
            const p1 = new Point(2,3);
            const p2 = new Point(6,-1);
            const p3 = new Point(8,-5);
            const p4 = new Point(4,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.square(), 24.2);
        });

        it("Common square of Quadrilateral made with point(0,0), point(5,7), point(8,9) and point(12,3) = 52.38", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(5,7);
            const p3 = new Point(8,9);
            const p4 = new Point(12,3);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.square(), 52.38);
        });

        it("Common square of Quadrilateral made with point(2,0), point(4,5), point(8,5) and point(10,0) = 30.03", () => {
            const p1 = new Point(2,0);
            const p2 = new Point(4,5);
            const p3 = new Point(8,5);
            const p4 = new Point(10,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p1,p4);
            const d1_d2 = new Distance(p1,p3);
            const abcd = new Quad(d1,d2,d3,d4,d1_d2);
            assert.equal(abcd.square(), 30.03);
        });
    });
});

describe("Pentagon", () => {
    describe("Perimetr of Pentagon", () => {
        it("Perimetr of Pentagon made with point(0,0), point(3,0), point(3,3), point(6,3) and point(7,0) = 19.16", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const p4 = new Point(6,3);
            const p5 = new Point(7,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.equal(abcde.perimetr(), 19.16);
        });

        it("Perimetr of Pentagon made with point(1,2), point(5,4), point(8,6), point(4,3) and point(2,1) = 17.32", () => {
            const p1 = new Point(1,2);
            const p2 = new Point(5,4);
            const p3 = new Point(8,6);
            const p4 = new Point(4,3);
            const p5 = new Point(2,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.equal(abcde.perimetr(), 17.32);
        });

        it("Perimetr of Pentagon made with point(-5,-5), point(-3,-2), point(-1,0), point(-9,3) and point(-11,5) = 29.47", () => {
            const p1 = new Point(-5,-5);
            const p2 = new Point(-3,-2);
            const p3 = new Point(-1,0);
            const p4 = new Point(-9,3);
            const p5 = new Point(-11,5);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.equal(abcde.perimetr(), 29.47);
        });
    });

    describe("Square of Pentagon", () => {
        it("Square of Pentagon made with point(0,0), point(3,0), point(3,3), point(6,3) and point(7,0) = 18.5", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const p4 = new Point(6,3);
            const p5 = new Point(7,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.equal(abcde.sq(), 1.85);
        });

        it("Square of Pentagon made with point(1,2), point(5,4), point(8,6), point(4,3) and point(2,1) = 20.5", () => {
            const p1 = new Point(1,2);
            const p2 = new Point(5,4);
            const p3 = new Point(8,6);
            const p4 = new Point(4,3);
            const p5 = new Point(2,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.equal(abcde.sq(), 2.5);
        });

        it("Square of Pentagon made with point(-5,-5), point(-3,-2), point(-1,0), point(-9,3) and point(-11,5) = 30.43", () => {
            const p1 = new Point(-5,-5);
            const p2 = new Point(-3,-2);
            const p3 = new Point(-1,0);
            const p4 = new Point(-9,3);
            const p5 = new Point(-11,5);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.equal(abcde.sq(), 3.43);
        });
    });

    describe("Right Pentagon", () => {
        it("Pentagon made with point(0,0), point(3,0), point(3,3), point(6,3) and point(7,0) is Right Pentagon: FALSE", () => {
            const p1 = new Point(0,0);
            const p2 = new Point(3,0);
            const p3 = new Point(3,3);
            const p4 = new Point(6,3);
            const p5 = new Point(7,0);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.isFalse(abcde.isRightPent());
        });

        it("Pentagon made with point(1,2), point(5,4), point(8,6), point(4,3) and point(2,1) is Right Pentagon: FALSE", () => {
            const p1 = new Point(1,2);
            const p2 = new Point(5,4);
            const p3 = new Point(8,6);
            const p4 = new Point(4,3);
            const p5 = new Point(2,1);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.isFalse(abcde.isRightPent());
        });

        it("Pentagon made with point(-5,-5), point(-3,-2), point(-1,0), point(-9,3) and point(-11,5) is Right Pentagon: FALSE", () => {
            const p1 = new Point(-5,-5);
            const p2 = new Point(-3,-2);
            const p3 = new Point(-1,0);
            const p4 = new Point(-9,3);
            const p5 = new Point(-11,5);
            const d1 = new Distance(p1,p2);
            const d2 = new Distance(p2,p3);
            const d3 = new Distance(p3,p4);
            const d4 = new Distance(p4,p5);
            const d5 = new Distance(p1,p5);
            const abcde = new Pentagon(d1,d2,d3,d4,d5);
            assert.isFalse(abcde.isRightPent());
        });
    });
});
