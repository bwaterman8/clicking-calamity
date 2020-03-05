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
            expect(underTest.companionCount).toBe(1);
        });
        it('Clicking companion subtracts 100 clicks from count', () => {
            underTest.clickCompanionPurchase();
            expect(underTest.clickCount).toBe(-100);
        });
        it('Purchasing each clicking companion increases the cost by ten percent', () => {
            underTest.increaseClickingCompanionsCost();
            expect(underTest.companionCost).toBe(110);
        });
        it('Clicking companions add to the click count', () => {
            underTest.clickCompanionAddsToClickCount();
            expect(underTest.clickCount).toBe(1)
        });
    describe('Culmination Companion', () => {
        it('Culmination companion should record clicks', () => {
            underTest.culminationCompanion();
            expect(underTest.culminationCount).toBe(1);
        });
        it('Culmination companion subtracts 10 clicks from count', () => {
            underTest.culminationCompanionPurchase();
            expect(underTest.clickCount).toBe(-10);
        });
    });
    });
});