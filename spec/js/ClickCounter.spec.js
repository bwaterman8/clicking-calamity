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
    describe('Culmination Compounder', () => {
        it('Culmination compounder count should begin at 0', () =>{
            expect(underTest.culminationCompounderCount()).toBe(0);
        })
        it('Culmination compounder should record clicks', () => {
            underTest.culminationCompounder();
            expect(underTest.culminationCount).toBe(1);
        });
        it('Culmination compounder subtracts 10 clicks from count', () => {
            underTest.culminationCompounderPurchase();
            expect(underTest.clickCount).toBe(-10);
        });
        it('Purchasing each culmination compounder increases the cost by ten percent', () => {
            underTest.increaseCulminationCompounderCost();
            expect(underTest.culminationCost).toBe(11);
        });
        it('Culmination compounder grows click count exponentially', () =>{
            underTest.culminationCompounder();
            expect(underTest.clickCount).toBe(1.2);
        })
        it('Culmination compounder grows companion click count exponentially', () => {
            underTest.culminationCompounder();
            expect(underTest.companionCount).toBe(1.2);
        });
    });
    });
});