const PWDForm = () => {
    return (
        <div>
            <div className="row py-2">
                <div className="col form-group">
                    <label>Percentage of Disability <small style={{ color: 'red' }}>*</small></label>
                    <input className="form-control" type="number" id="disabilityPercentage" name="disabilityPercentage" />
                </div>

                <div className="col form-group">
                    <label>PwBD UDID number</label>
                    <input className="form-control" type="number" id="PwBD_UDID" name="PwBD_UDID" />
                </div>

                <div className="col form-group">
                    <label>PwBD Category <small style={{ color: 'red' }}>*</small></label>
                    <select className="form-control" type="text" id="PwBD_category" name="PwBD_category">
                        <option> -- select an option -- </option>
                        <option value="Blindness and low vision">Blindness and low vision</option>
                        <option value="Deaf and hard of hearing">Deaf and hard of hearing</option>
                        <option value="Locomotor disability including cerebral palsy, leprosy cured, dwarfism, acid attack victims and muscular dystrophy">Locomotor disability including cerebral palsy, leprosy cured, dwarfism, acid attack victims and muscular dystrophy</option>
                        <option value="Autism, intellectual disability, specific learning disability and mental illness">Autism, intellectual disability, specific learning disability and mental illness</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default PWDForm;