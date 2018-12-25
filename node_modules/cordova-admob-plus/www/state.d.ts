declare type AdId = number;
declare class AdMobState {
    applicationId: undefined | string;
    devMode: boolean;
    platform: string;
    nextId: AdId;
    adUnits: {
        string?: AdId;
    };
    constructor();
    getAdId(adUnitId: string): any;
}
export default AdMobState;
