class ClickCount {
    constructor() {
        this.companionCost = 100;    
        this.clickCount = 0;
        this.companionCount = 0;
        this.culminationCount = 0;
        this.culminationCost = 10;
    }

    countClick() {
        this.clickCount++;
    }

    clickCompanionCount() {
        return 0;
    }
    clickCompanion() {
        this.companionCount++;
    }
    clickCompanionPurchase() {
       this.clickCount -= this.companionCost;
       this.increaseClickingCompanionsCost;
       if (this.clickCount >= this.companionCost) {
        this.companionCost = Math.round(1.1 * this.companionCost);
       }
    }
    increaseClickingCompanionsCost() {
            this.companionCost = Math.round(1.1 * this.companionCost);
    }
    clickCompanionAddsToClickCount() {
        this.clickCount++ + this.companionCount++;
    }
    culminationCompounder() {
        this.culminationCount++;
    }
    culminationCompounderPurchase() {
        this.clickCount -= this.culminationCost;
    }
    increaseCulminationCompounderCost() {
        this.culminationCost = Math.round(1.1 * this.culminationCost);
    }
}
