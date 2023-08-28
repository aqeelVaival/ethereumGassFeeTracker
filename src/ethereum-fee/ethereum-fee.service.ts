import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class EthereumFeeService {
    async getFeeData() {
        const baseUrl = "https://greatest-small-daylight.quiknode.pro/35de59d35810404f8628ca8d695c12d5b82f72f2/";

        const requestData = {
            jsonrpc: "2.0",
            method: "eth_feeHistory",
            params: ["0x5", "latest", []],
            id: 1
        };

        try {
            const response = await axios.post(baseUrl, requestData);
            const history = response.data.result;

            const baseFeePerGas = history.baseFeePerGas.map(x => parseInt(x) / 10 ** 9);
            const largestValue = Math.max(...baseFeePerGas);
            const sortedArray = baseFeePerGas.slice().sort((a, b) => a - b);
            const middleIndex = Math.floor(sortedArray.length / 2);
            const middleValue = sortedArray[middleIndex];

            const feeData = {
                safeLow: {
                    maxFee: middleValue
                },
                standard: {
                    maxFee: largestValue
                },
                fast: {
                    maxFee: largestValue + 1
                }
            };

            return feeData;
        } catch (error) {
            throw error;
        }
    }
}
