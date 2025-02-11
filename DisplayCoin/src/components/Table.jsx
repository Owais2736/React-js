import React from 'react'
import { useContext } from 'react'
import { value } from '../context/context'

const Table = () => {
    const coinValue = useContext(value)
    console.log(" hdjd", coinValue);

    return (
        <>
        <center>

            <div class="font-sans mt-28  overflow-x-auto">
                <table class="min-w-[40%]  bg-white">
                    <thead class="bg-gray-100 whitespace-nowrap">
                        <tr>
                            <th class="p-4 w-[50%] text-left text-lg font-semibold text-gray-800">
                                Currancy
                            </th>
                            <th class="p-4 w-[50%] text-left text-lg font-semibold text-gray-800">
                                Rates
                            </th>

                        </tr>
                    </thead>

                    <tbody class="whitespace-nowrap">
                        <tr class="hover:bg-gray-50">
                            <td class="p-4 text-[15px] text-gray-800">
                                BTC
                            </td>
                            <td class="p-4 text-[15px] text-gray-800">
                                {coinValue.data?.rates?.BTC}
                            </td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                            <td class="p-4 text-[15px] text-gray-800">
                                ACP
                            </td>
                            <td class="p-4 text-[15px] text-gray-800">
                                {coinValue.data?.rates?.ACP}
                            </td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                            <td class="p-4 text-[15px] text-gray-800">
                                ABC
                            </td>
                            <td class="p-4 text-[15px] text-gray-800">
                                {coinValue.data?.rates?.ABC}
                            </td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                            <td class="p-4 text-[15px] text-gray-800">
                                ACT
                            </td>
                            <td class="p-4 text-[15px] text-gray-800">
                                {coinValue.data?.rates?.ACT}
                            </td>
                        </tr>


                        <tr class="hover:bg-gray-50">
                            <td class="p-4 text-[15px] text-gray-800">
                                AMB
                            </td>
                            <td class="p-4 text-[15px] text-gray-800">
                                {coinValue.data?.rates?.AMB}
                            </td>
                        </tr>



                        <tr class="hover:bg-gray-50">
                            <td class="p-4 text-[15px] text-gray-800">
                                AION
                            </td>
                            <td class="p-4 text-[15px] text-gray-800">
                                {coinValue.data?.rates?.AION}
                            </td>
                        </tr>





                    </tbody>
                </table>
            </div>

            </center>

        </>
    )
}

export default Table
