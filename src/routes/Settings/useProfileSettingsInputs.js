// Copyright (C) 2017-2022 Smart code 203358507

const React = require('react');
const { useServices } = require('stremio/services');
const { CONSTANTS, languageNames } = require('stremio/common');

const useProfileSettingsInputs = (profile) => {
    const { core } = useServices();
    // TODO combine those useMemo in one
    const interfaceLanguageSelect = React.useMemo(() => ({
        options: Object.keys(languageNames).map((code) => ({
            value: code,
            label: languageNames[code]
        })),
        selected: [profile.settings.interfaceLanguage],
        onSelect: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        interfaceLanguage: event.value
                    }
                }
            });
        }
    }), [profile.settings]);
    const subtitlesLanguageSelect = React.useMemo(() => ({
        options: Object.keys(languageNames).map((code) => ({
            value: code,
            label: languageNames[code]
        })),
        selected: [profile.settings.subtitlesLanguage],
        onSelect: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        subtitlesLanguage: event.value
                    }
                }
            });
        }
    }), [profile.settings]);
    const subtitlesSizeSelect = React.useMemo(() => ({
        options: CONSTANTS.SUBTITLES_SIZES.map((size) => ({
            value: `${size}`,
            label: `${size}%`
        })),
        selected: [`${profile.settings.subtitlesSize}`],
        renderLabelText: () => {
            return `${profile.settings.subtitlesSize}%`;
        },
        onSelect: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        subtitlesSize: parseInt(event.value, 10)
                    }
                }
            });
        }
    }), [profile.settings]);
    const subtitlesTextColorInput = React.useMemo(() => ({
        value: profile.settings.subtitlesTextColor,
        onChange: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        subtitlesTextColor: event.value
                    }
                }
            });
        }
    }), [profile.settings]);
    const subtitlesBackgroundColorInput = React.useMemo(() => ({
        value: profile.settings.subtitlesBackgroundColor,
        onChange: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        subtitlesBackgroundColor: event.value
                    }
                }
            });
        }
    }), [profile.settings]);
    const subtitlesOutlineColorInput = React.useMemo(() => ({
        value: profile.settings.subtitlesOutlineColor,
        onChange: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        subtitlesOutlineColor: event.value
                    }
                }
            });
        }
    }), [profile.settings]);
    const audioLanguageSelect = React.useMemo(() => ({
        options: Object.keys(languageNames).map((code) => ({
            value: code,
            label: languageNames[code]
        })),
        selected: [profile.settings.audioLanguage],
        onSelect: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        audioLanguage: event.value
                    }
                }
            });
        }
    }), [profile.settings]);
    const seekTimeDurationSelect = React.useMemo(() => ({
        options: CONSTANTS.SEEK_TIME_DURATIONS.map((size) => ({
            value: `${size}`,
            label: `${size / 1000} seconds`
        })),
        selected: [`${profile.settings.seekTimeDuration}`],
        renderLabelText: () => {
            return `${profile.settings.seekTimeDuration / 1000} seconds`;
        },
        onSelect: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        seekTimeDuration: parseInt(event.value, 10)
                    }
                }
            });
        }
    }), [profile.settings]);
    const nextVideoPopupDurationSelect = React.useMemo(() => ({
        options: CONSTANTS.NEXT_VIDEO_POPUP_DURATIONS.map((duration) => ({
            value: `${duration}`,
            label: duration === 0 ? 'Disabled' : `${duration / 1000} seconds`
        })),
        selected: [`${profile.settings.nextVideoNotificationDuration}`],
        renderLabelText: () => {
            return profile.settings.nextVideoNotificationDuration === 0 ?
                'Disabled'
                :
                `${profile.settings.nextVideoNotificationDuration / 1000} seconds`;
        },
        onSelect: (event) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        nextVideoNotificationDuration: parseInt(event.value, 10)
                    }
                }
            });
        }
    }), [profile.settings]);
    const bingeWatchingCheckbox = React.useMemo(() => ({
        checked: profile.settings.bingeWatching,
        onClick: () => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        bingeWatching: !profile.settings.bingeWatching
                    }
                }
            });
        }
    }), [profile.settings]);
    const playInBackgroundCheckbox = React.useMemo(() => ({
        checked: profile.settings.playInBackground,
        onClick: () => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        playInBackground: !profile.settings.playInBackground
                    }
                }
            });
        }
    }), [profile.settings]);
    const playInExternalPlayerCheckbox = React.useMemo(() => ({
        checked: profile.settings.playInExternalPlayer,
        onClick: () => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        playInExternalPlayer: !profile.settings.playInExternalPlayer
                    }
                }
            });
        }
    }), [profile.settings]);
    const hardwareDecodingCheckbox = React.useMemo(() => ({
        checked: profile.settings.hardwareDecoding,
        onClick: () => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        hardwareDecoding: !profile.settings.hardwareDecoding
                    }
                }
            });
        }
    }), [profile.settings]);
    const streamingServerUrlInput = React.useMemo(() => ({
        value: profile.settings.streamingServerUrl,
        onChange: (value) => {
            core.transport.dispatch({
                action: 'Ctx',
                args: {
                    action: 'UpdateSettings',
                    args: {
                        ...profile.settings,
                        streamingServerUrl: value
                    }
                }
            });
        }
    }), [profile.settings]);
    return {
        interfaceLanguageSelect,
        subtitlesLanguageSelect,
        subtitlesSizeSelect,
        subtitlesTextColorInput,
        subtitlesBackgroundColorInput,
        subtitlesOutlineColorInput,
        audioLanguageSelect,
        seekTimeDurationSelect,
        nextVideoPopupDurationSelect,
        bingeWatchingCheckbox,
        playInBackgroundCheckbox,
        playInExternalPlayerCheckbox,
        hardwareDecodingCheckbox,
        streamingServerUrlInput
    };
};

module.exports = useProfileSettingsInputs;
