if (!location.protocol.startsWith('https'))
    location = 'https://' + location.hostname + location.pathname;