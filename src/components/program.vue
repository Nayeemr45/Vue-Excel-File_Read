<template>
    <div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
        <div class="row">
            <div class="col-xs-6 d-flex justify-content-center">
                <form class="form-inline">
                    <div class="form-group col-xs-6">
                        <input
                            type="file"
                            class="form-control"
                            id="file"
                            :accept="SheetJSFT"
                            @change="_change"
                        />
                        <!-- @blur="dateFunc" -->
                    </div>
                </form>
                <div class="d-flex justify-content-center mx-3">
                    <b-row>
                        <b-col lg="11">
                            <input
                                type="text"
                                class="form-control"
                                id="text"
                                v-model="dateData"
                                @keyup="dateFunc"
                            />
                        </b-col>
                        <b-col lg="1">
                            <b-button variant="success" @click="dateFunc">
                                Sumbit
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-xs-12">
                <button
                    :disabled="data.length ? false : true"
                    class="btn btn-success"
                    @click="_export"
                >
                    Export
                </button>
            </div>
        </div> -->

        <div class="table">
            <table>
                <tr>
                    <th>price</th>
                    <th>ID</th>
                    <th>Total Dwell Time</th>
                    <th>Total Fixation</th>
                    <th>Sequencing</th>
                    <th>Sequencing</th>
                    <th>Total Saccades</th>
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
                    <!-- <th>five view (s)</th>
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
                    <th>8th Dwell Time (s)</th> -->
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

        <!-- <div class="row">
            <div class="col-xs-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th v-for="c in cols" :key="c.key">
                                    {{ c.name }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(r, key) in data" :key="key">
                                <td v-for="c in cols" :key="c.key">
                                    {{ r[c.key] }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import XLSX from "xlsx";

const make_cols = (refstr) =>
    Array(XLSX.utils.decode_range(refstr).e.c + 1)
        .fill(0)
        .map((x, i) => ({ name: XLSX.utils.encode_col(i), key: i }));
const _SheetJSFT = [
    "xlsx",
    "xlsb",
    "xlsm",
    "xls",
    "xml",
    "csv",
    "txt",
    "ods",
    "fods",
    "uos",
    "sylk",
    "dif",
    "dbf",
    "prn",
    "qpw",
    "123",
    "wb*",
    "wq*",
    "html",
    "htm",
]
    .map(function (x) {
        return "." + x;
    })
    .join(",");
export default {
    name: "program",
    data() {
        return {
            data: ["SheetJS".split(""), "1234567".split("")],
            cols: [
                { name: "A", key: 0 },
                { name: "B", key: 1 },
                { name: "C", key: 2 },
                { name: "D", key: 3 },
                { name: "E", key: 4 },
                { name: "F", key: 5 },
                { name: "G", key: 6 },
            ],
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
        _export(evt) {
            console.log(evt);
            /* convert state to workbook */
            const ws = XLSX.utils.aoa_to_sheet([this.eightArray]);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
            /* generate file and send to client */
            XLSX.writeFile(wb, "sheetjs.xlsx");
        },
        _file(file) {
            /* Boilerplate to set up FileReader */
            const reader = new FileReader();
            reader.onload = (e) => {
                /* Parse data */
                const ab = e.target.result;
                const wb = XLSX.read(new Uint8Array(ab), { type: "array" });
                /* Get first worksheet */
                const wsname = wb.SheetNames[4];
                const ws = wb.Sheets[wsname];
                /* Convert array of arrays */
                const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
                /* Update state */
                this.data = data;
                this.tableData();
                this.cols = make_cols(ws["!ref"]);
            };
            reader.readAsArrayBuffer(file);
        },
        dateFunc() {
            this.data_array = [];
            this.arr = [];
            this.newArray = [];
            this.eightArray = [];
            this.tableData();
        },
        tableData() {
            for (let i = 0; i < this.data.length; i++) {
                for (let j = 0; j < this.data[i].length; j++) {
                    // if (this.data[i][j] == "") {
                    //     this.data[i][j] = null;
                    // } else {
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
                    // }
                }
            }
            this.arr = [...this.data_array];

            this.arr.forEach((v, i) => {
                this.newArray.push(v);
                if (
                    ((i + 1) % 20 === 0 && i !== 0) ||
                    i + 1 == this.arr.length
                ) {
                    this.eightArray.push(this.newArray);
                    this.newArray = [];
                }
            });
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
    margin-top: 10rem;
    padding: 4rem 9em;
}
</style>
