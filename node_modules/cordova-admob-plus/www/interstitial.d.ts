import { IAdRequest } from '@admob-plus/core';
import { AdBase, TestIds } from './base';
export default class Interstitial extends AdBase {
    protected testIdForAndroid: TestIds;
    protected testIdForIOS: TestIds;
    load(opts?: IAdRequest): Promise<void>;
    show(): Promise<{}>;
}
