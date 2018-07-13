const TRANSLATIONS = {
    en: {
        _language: 'English',
        loading: 'Loading...',
        'passphrase-strength': 'Strength',
        'passphrase-confirm': 'Confirm',
        'passphrase-placeholder': 'Enter Passphrase',
        'sign-tx-wrong-passphrase': 'Wrong Passphrase, please try again',
        'sign-tx-button-enter-pin': 'Enter PIN',
        'privacy-agent-headline': 'Are you being watched?',
        'privacy-agent-info': 'Now is the perfect time to assess your surroundings. Nearby windows? Hidden cameras? '
                            + 'Shoulder spies?',
        'privacy-agent-warning': 'Anyone that can see your Recovery Words can steal all your funds!',
        'privacy-agent-ok': 'OK, all good',
        'recovery-words-input-label': 'Recovery Words',
        'recovery-words-input-field-placeholder': 'word #',
        'create-choose-identicon-header1': 'Choose Your Account Avatar',
        'create-set-passphrase-header1': 'Set a Passphrase',
        'create-set-passphrase-header2': 'Please enter a Passphrase to secure your account.',
        'create-set-passphrase-warning': `The Passphrase is [strong]not[/strong] an alternative for your 24 Recovery
            Words!`,
        'import-heading': 'Import from Recovery Words',
        'import-words-subheading': 'Please enter your 24 Account Recovery Words.',
        'import-passphrase-subheading': 'Please enter a Passphrase to secure your key.',
        'import-confirm-subheading': 'Please repeat your Passphrase:',
        'recovery-words-title': 'Recovery Words',
    },
    de: {
        _language: 'Deutsch',
        loading: 'Wird geladen...',
        'passphrase-strength': 'Stärke',
        'passphrase-confirm': 'Bestätigen',
        'passphrase-placeholder': 'Passphrase eingeben',
        'sign-tx-wrong-passphrase': 'Falsche Passphrase, bitte versuche es nochmal',
        'sign-tx-button-enter-pin': 'PIN eingeben',
        'privacy-agent-headline': 'Werden sie beobachtet?',
        'privacy-agent-info': 'Jetzt ist eine gute Zeit um sich einmal umzuschauen. Gibt es Fenster in der Nähe? '
                            + ' Versteckte Kameras? Jemand der über die Schulter schaut?',
        'privacy-agent-warning': 'Falls irgendjemand ihre Wiederherstellungswörter herausfindet '
                               + 'kann er ihre gesamten NIM stehlen!',
        'privacy-agent-ok': 'OK, alles in Ordnung',
        'recovery-words-input-label': 'Wiederherstellungswörter',
        'recovery-words-input-field-placeholder': 'Wort ',
        'create-choose-identicon-header1': 'Wähle einen Avatar für dein Konto',
        'create-set-passphrase-header1': 'Lege eine Passphrase fest',
        'create-set-passphrase-header2': 'Bitte gib eine Passphrase ein, um dein Konto zu sichern.',
        'create-set-passphrase-warning': `Die Passphrase ist [strong]keine[/strong] Alternative für deine 24
            Wiederherstellungswörter!`,
        'import-heading': 'Mit Wiederherstellungswörtern importieren.',
        'import-words-subheading': 'Bitte gib deine 24 Wiederherstellungswörter ein.',
        'import-passphrase-subheading': 'Bitte gib eine Passphrase ein, um deinen Schlüssel zu schützen.',
        'import-confirm-subheading': 'Bitte wiederhole deine Passphrase.',
        'recovery-words-title': 'Wiederherstellungswörter',
    },
};

if (typeof module !== 'undefined') module.exports = TRANSLATIONS;
else window.TRANSLATIONS = TRANSLATIONS;
