describe('Cookie Clicker', ()=>{
    let underTest;

    beforeEach(()=> {
        underTest = new ClickCount();
    });
    describe('Click count will count its clicks', () => {
        it('A single click records one click', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('Two clicks will record two clicks', () =>{
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    })
    describe('Clicking Companion', () => {
        it('Clicking companion should begin clicks at zero', () =>{
            expect(underTest.clickCompanionCount()).toBe(0);
        })
        it('Clicking companion should record clicks', () => {
            underTest.clickCompanion();
            expect(underTest.clickCount).toBe(1);
        });
        it('Clicking companion subtracts 5 clicks from count', () => {
            underTest.clickCompanionPurchase();
            expect(underTest.clickCount).toBe(-100);
        });
    });
});