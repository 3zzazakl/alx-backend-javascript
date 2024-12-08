interface MajorCredits {
    credits: number;
    brand: 'majorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'minorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'majorCredits' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'minorCredits' };
}

const majorSubject1: MajorCredits = { credits: 4, brand: 'majorCredits' };

const majorSubject2: MajorCredits = { credits: 3, brand: 'majorCredits' };

const minorSubject1: MinorCredits = { credits: 2, brand: 'minorCredits' };

const minorSubject2: MinorCredits = { credits: 1, brand: 'minorCredits' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

const majorCreditsElement = document.getElementById('major-credits');
const minorCreditsElement = document.getElementById('minor-credits');

if (majorCreditsElement && minorCreditsElement) {
    majorCreditsElement.textContent = `Total major credits: ${totalMajorCredits.credits}`;
    minorCreditsElement.textContent = `Total minor credits: ${totalMinorCredits.credits}`;
}

//console.log(`Total major credits: ${totalMajorCredits.credits}`);
//console.log(`Total minor credits: ${totalMinorCredits.credits}`);

