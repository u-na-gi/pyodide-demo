let warker = `
import numpy as np

def walker():
    nsteps = 10000
    draws = np.random.randint(0, 2, size=nsteps)
    steps = np.where(draws>0, 1, -1)
    walk = steps.cumsum()
    return walk

walker()
`
export default warker
