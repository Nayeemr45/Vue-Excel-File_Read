<template>
    <div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
        <b-row class="d-flex justify-content-center">
            <b-col lg="2">
                <input
                    type="number"
                    class="form-control"
                    id="text"
                    v-model="sheetNumber"
                    placeholder="Sheet No"
                />
            </b-col>
            <b-col lg="2">
                <input
                    type="number"
                    class="form-control"
                    id="text"
                    v-model="columnNumber"
                    placeholder="Enter Column Number"
                />
            </b-col>
            <b-col lg="2">
                <input
                    type="text"
                    class="form-control"
                    id="text"
                    v-model="dateData"
                    @keyup="dateFunc"
                    placeholder="Enter Date"
                />
            </b-col>
            <b-col lg="5">
                <b-row class="d-flex justify-content-start">
                    <b-col lg="7">
                        <input
                            type="file"
                            class="form-control"
                            id="file"
                            :accept="SheetJSFT"
                            @change="_change"
                        />
                    </b-col>
                    <b-col lg="5" class="d-flex justify-content-start">
                        <b-button variant="success" @click="saccadesFunc">
                            <b-spinner small v-if="loadingBtn"></b-spinner>
                            Calculate Saccades
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <h3 class="pt-5">Total Saccades :{{ totalSaccades }}</h3>
        <div class="table">
            <table>
                <tr>
                    <th>price</th>
                    <th>ID</th>
                    <th>Task completion time</th>
                    <th>Saccades</th>
                    <th>Fixation Count</th>
                    <th>Total Dwell Time</th>
                    <th>Fixation</th>
                    <th>Sequencing</th>
                    <th>Individual Saccades</th>
                    <th>Total Individual Saccades</th>
                    <th>Choosen Product</th>
                    <th>First view (s)</th>
                    <th>Last view (S)</th>
                    <th>1st Dwell Time (s)</th>
                    <th>Second view (s)</th>
                    <th>Last view (S)</th>
                    <th>2nd Dwell Time (s)</th>
                    <th>Third view (s)</th>
                    <th>Last view (S)</th>
                    <th>3rd Dwell Time (s)</th>
                    <th>Fourth view (s)</th>
                    <th>Last view (S)</th>
                    <th>4th Dwell Time (s)</th>
                    <th>five view (s)</th>
                    <th>Last view (S)</th>
                    <th>5th Dwell Time (s)</th>
                    <th>six view (s)</th>
                    <th>Last view (S)</th>
                    <th>6th Dwell Time (s)</th>
                    <th>seven view (s)</th>
                    <th>Last view (S)</th>
                    <th>7th Dwell Time (s)</th>
                    <th>eight view (s)</th>
                    <th>Last view (S)</th>
                    <th>8th Dwell Time (s)</th>
                </tr>
                

                <tr
                    v-for="(inputArray, index) in eightArray"
                    :key="inputArray[index]"
                >
                    <td
                        v-for="(input, index) in inputArray"
                        :key="input[index]"
                        :class="input != '0' ? 'active' : 'unactive'"
                    >
                        <span :class="input != '0' ? 'active' : 'unactive'">{{
                            input
                        }}</span>
                    </td>
                </tr>
            </table>
        </div>
            <div class="d-flex justify-content-center" v-if="loading">
                    <b-spinner style="width: 5rem; height: 5rem;" v-if="loading"></b-spinner>
                </div>
    </div>
</template>

<script>
import XLSX from "xlsx";
const _SheetJSFT = ["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"]
    .map(function (x) {
        return "." + x;
    })
    .join(",");
export default {
    name: "program",
    data() {
        return {
            totalSaccades: 0,
            columnNumber: null,
            sheetNumber: null,
            loading: false,
            loadingBtn: false,
            data: ["SheetJS".split(""), "1234567".split("")],
            SheetJSFT: _SheetJSFT,
            data_array: [],
            eightArray: [],
            newArray: [],
            arr: [],
            dateData: "",
        };
    },
    methods: {
        _suppress(evt) {
            evt.stopPropagation();
            evt.preventDefault();
        },
        _drop(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            const files = evt.dataTransfer.files;
            if (files && files[0]) this._file(files[0]);
        },
        _change(evt) {
            const files = evt.target.files;
            if (files && files[0]) this._file(files[0]);
        },
        _file(file) {
            /* Boilerplate to set up FileReader */
            const reader = new FileReader();
            reader.onload = (e) => {
                /* Parse data */
                const ab = e.target.result;
                const wb = XLSX.read(new Uint8Array(ab), { type: "array" });
                /* Get first worksheet */
                const wsname = wb.SheetNames[this.sheetNumber];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
                /* Update state */
                this.data = data;
                this.loading = true;
                this.tableData();
            };
            reader.readAsArrayBuffer(file);
        },
        dateFunc() {
            this.data_array = [];
            this.arr = [];
            this.newArray = [];
            this.eightArray = [];
            this.totalSaccades = 0;
            this.tableData();
            this.saccadesFunc();
            
        },
        tableData() {
            for (let i = 0; i < this.data.length; i++) {
                for (let j = 0; j < this.data[i].length; j++) {
                    if (this.data[i][1] == this.dateData) {
                        if (this.data[i][j] == null) {
                            this.data[i][j] = "0";
                        } else if (this.data[i][j] == "") {
                            this.data[i][j] = "0";
                        } else if (this.data[i][j] == 0) {
                            this.data[i][j] = "0";
                        }
                        this.data_array.push(this.data[i][j]);
                    }
                }
            }
            this.arr = [...this.data_array];

            this.arr.forEach((v, i) => {
                this.newArray.push(v);
                if (
                    ((i + 1) % this.columnNumber === 0 && i !== 0) ||
                    i + 1 == this.arr.length
                ) {
                    this.eightArray.push(this.newArray);
                    this.loading = false;
                    this.newArray = [];
                }
            });
        },

        saccadesFunc() {
            this.loadingBtn = true;
            let value = "";
            let arr = [];
            let arr2 = [];
            for (let i = 0; i < this.eightArray.length; i++) {
                arr.push(this.eightArray[i]);
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][9] != "0") {
                    arr2.push(arr[i][9]);
                }
            }
            value = arr2.reduce((a, b) => a + b, 0);
            this.totalSaccades = Number(value).toFixed(2);
            this.loadingBtn = false;
        },
    },
};
</script>
<style scoped>
tr,
td {
    border: 1px solid #000;
}
td {
    padding: 5px !important;
    font-size: 14px;
    font-weight: bold;
}
th {
    border: 1px solid #000;
}
.active {
    background-color: #4cecbd;
}
.unactive {
    background-color: #076476;
}
.table {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    padding: 4rem 9em;
}
</style>
