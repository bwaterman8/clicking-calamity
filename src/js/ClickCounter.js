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
        if(this.culminationCompounderPurchase) {
            this.clickCount += 1 * this.valueMultiplier();
        }
    }
    valueMultiplier() {
        return Math.pow(1.2, this.culminationCount);
    }
    culminationCompounderPurchase() {
        this.clickCount -= this.culminationCost;
        this.increaseCulminationCompounderCost;
        if (this.clickCount >= this.culminationCost) {
            this.culminationCost = Math.round(1.1 * this.culminationCost)
        }
    }
    increaseCulminationCompounderCost() {
        this.culminationCost = Math.round(1.1 * this.culminationCost);
    }
}
