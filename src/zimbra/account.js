// Copyright (c) 2016 ZBox, Spa. All Rights Reserved.
// See LICENSE.txt for license information.

import Zimbra from './zimbra.js';

export default class Account extends Zimbra {
    constructor(account_obj, zimbra_api_client) {
      super(account_obj, zimbra_api_client);
    }
}
