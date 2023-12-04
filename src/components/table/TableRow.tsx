
const TableRow: React.FC = (props) => {

    return(
        <>
            <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap  px-6 py-4 font-bold dark:text-white">1</td>
                <td className="whitespace-nowrap  px-6 py-4 font-normal dark:text-white">Mark</td>
                <td className="whitespace-nowrap  px-6 py-4 font-normal dark:text-white">Otto</td>
                <td className="whitespace-nowrap  px-6 py-4 font-normal dark:text-white">@mdo</td>
            </tr>
        </>
    )
}
export default TableRow;