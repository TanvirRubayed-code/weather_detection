

import { Footer } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';

function DropdownComp() {
    return <div className="bg-gray-200 h-96 flex content-center justify-center items-center">


        <div className="bg-[#0175A3]
        ">
            <Dropdown

                label="Dropdown example"
                placement="right-start"
            >
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="bg-[#0175A3] w-full
        ">
                        <Dropdown

                            label="Multipe dropdown"
                            placement="right-start"
                        >

                            <Dropdown.Item>
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
            </Dropdown>
        </div>



    </div>
}
export default DropdownComp;